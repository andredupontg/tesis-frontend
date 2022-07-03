import { Component, OnInit } from '@angular/core';
import {DiagnosisService} from '../../services/diagnosis.service';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {
  
  covidResult: Boolean;
  loadedResult: Boolean;
  
  constructor(private diagnosisService: DiagnosisService) {
    this.covidResult = false;
    this.loadedResult = false;
  }

  ngOnInit(): void {}

  public diagnoseCovid (symptom: String) {
    this.loadedResult = false;
    return this.diagnosisService.getResults(symptom).subscribe(
      data => {
        this.covidResult = data;
        this.loadedResult = true;
      },
      error => console.log(error)
    )
  }
}
