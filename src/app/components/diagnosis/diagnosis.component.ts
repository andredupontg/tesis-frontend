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
  ageGroup: Number | null = null;
  ageGroupYes: Number | null = null;
  ageGroupNo: Number | null = null;
  gender: Number | null = null;
  genderYes: Number | null = null;
  genderNo: Number | null = null;
  contactWithConfirmedCase: Number | null = null;
  contactWithConfirmedCaseYes: Number | null = null;
  contactWithConfirmedCaseNo: Number | null = null;
  symptoms: any;
  
  constructor(private diagnosisService: DiagnosisService) {}

  ngOnInit(): void {this.loadedResult = false}

  public diagnoseCovid() {
    this.cough = Number((document.getElementById("cough") as HTMLInputElement).value);
    this.fever = Number((document.getElementById("fever") as HTMLInputElement).value);
    this.soreThroat = Number((document.getElementById("soreThroat") as HTMLInputElement).value);
    this.shortnessOfBreath = Number((document.getElementById("shortnessOfBreath") as HTMLInputElement).value);
    this.headache = Number((document.getElementById("headache") as HTMLInputElement).value);
    this.ageGroup = Number((document.getElementById("ageGroup") as HTMLInputElement).value);
    if (this.ageGroup == 1) {
      this.ageGroupYes = 1;
      this.ageGroupNo = 0;
    }
    if (this.ageGroup == 0) {
      this.ageGroupYes = 0;
      this.ageGroupNo = 1;
    }
    this.gender = Number((document.getElementById("gender") as HTMLInputElement).value);
    if (this.gender == 1) {
      this.genderYes = 1;
      this.genderNo = 0;
    }
    if (this.gender == 0) {
      this.genderYes = 0;
      this.genderNo = 1;
    }
    this.contactWithConfirmedCase = Number((document.getElementById("contactWithConfirmedCase") as HTMLInputElement).value);
    if (this.contactWithConfirmedCase == 1) {
      this.contactWithConfirmedCaseYes = 1;
      this.contactWithConfirmedCaseNo = 0;
    }
    if (this.contactWithConfirmedCase == 0) {
      this.contactWithConfirmedCaseYes = 0;
      this.contactWithConfirmedCaseNo = 1;
    }
    this.loadedResult = false;
    this.symptoms = {
      "cough": this.cough,
      "fever": this.fever,
      "sore_throat": this.soreThroat,
      "shortness_of_breath": this.shortnessOfBreath,
      "head_ache": this.headache,
      "Age 60 At Least_No": this.ageGroupNo,
      "Age 60 At Least_Yes": this.ageGroupYes,
      "Gender_female": this.genderNo,
      "Gender_male": this.genderYes,
      "Test Indication_Contact with confirmed": this.contactWithConfirmedCaseYes,
      "Test Indication_No contact": this.contactWithConfirmedCaseNo
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
