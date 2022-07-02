import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisService {
  private BASE_URL = "http://localhost:8080/diagnosis";
  constructor(private http:HttpClient) {};
  loadModels(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/loadModels`);
  }
  getResults(symptom: String): Observable<any> {
    return this.http.post(`${this.BASE_URL}/getResults`, symptom);
  }
}
