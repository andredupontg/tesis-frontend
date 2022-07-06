import { Component, OnInit } from '@angular/core';
import {DiagnosisService} from '../../services/diagnosis.service';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {
  
  covidResult: Boolean | null = null;
  loadedResult: Boolean = false;
  cough: Number | null = null;
  fever: Number | null = null;
  soreThroat: Number | null = null;
  shortnessOfBreath: Number | null = null;
  headache: Number | null = null;
  ageGroup: String | null = null;
  gender: String | null = null;
  contactWithConfirmedCase: String | null = null;
  symptoms: any;
  
  constructor(private diagnosisService: DiagnosisService) {}

  ngOnInit(): void {this.loadedResult = false}

  public diagnoseCovid() {
    this.cough = Number((document.getElementById("cough") as HTMLInputElement).value);
    this.fever = Number((document.getElementById("fever") as HTMLInputElement).value);
    this.soreThroat = Number((document.getElementById("soreThroat") as HTMLInputElement).value);
    this.shortnessOfBreath = Number((document.getElementById("shortnessOfBreath") as HTMLInputElement).value);
    this.headache = Number((document.getElementById("headache") as HTMLInputElement).value);
    this.ageGroup = (document.getElementById("ageGroup") as HTMLInputElement).value;
    this.gender = (document.getElementById("gender") as HTMLInputElement).value;
    this.contactWithConfirmedCase = (document.getElementById("contactWithConfirmedCase") as HTMLInputElement).value;
    this.loadedResult = false;
    this.symptoms = {
      "cough": this.cough,
      "fever": this.fever,
      "sore_throat": this.soreThroat,
      "shortness_of_breath": this.shortnessOfBreath,
      "head_ache": this.headache,
      "age_60_and_above": this.ageGroup,
      "gender": this.gender,
      "test_indication": this.contactWithConfirmedCase
    }
    this.diagnosisService.getResults(<JSON>this.symptoms).subscribe(
      data => {
        this.covidResult = data;
        console.log(data);
        this.loadedResult = true;
      },
      error => console.log(error)
    )
  }
}
