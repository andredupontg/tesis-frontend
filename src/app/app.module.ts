import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiagnosisComponent } from './components/diagnosis/diagnosis.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TitleComponent } from './components/title/title.component';
import {HttpClientModule} from '@angular/common/http';
import { DiagnosisService } from './services/diagnosis.service';

@NgModule({
  declarations: [
    AppComponent,
    DiagnosisComponent,
    NavbarComponent,
    FooterComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DiagnosisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
