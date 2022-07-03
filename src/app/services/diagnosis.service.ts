import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisService {
  private BASE_URL = "http://localhost:8080";
  constructor(private http:HttpClient) {};
  getResults(symptom: String): Observable<any> {
    return this.http.post(`${this.BASE_URL}/getResults`, symptom);
  }
}
