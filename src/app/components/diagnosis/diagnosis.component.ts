import { Component, OnInit } from '@angular/core';
import {DiagnosisService} from '../../services/diagnosis.service';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {
  
  private covidResult: Boolean;
  
  constructor(private diagnosisService: DiagnosisService) {this.covidResult = false;}

  ngOnInit(): void {
    this.diagnosisService.loadModels().subscribe(
      data => console.log(data),
      error => console.log(error))
  }

  public diagnoseCovid (symptom: String) {
    return this.diagnosisService.getResults(symptom).subscribe(
      data => this.covidResult = data,
      error => console.log(error)
    )
  }

}
