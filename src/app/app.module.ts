import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.component";
import {SubjectsComponent} from "./subjects/subjects.component";
import {HomeComponent} from "./home.component";
import {SubjectDetailComponent} from "./subjects/subject-detail.component";

@NgModule({
  declarations: [
    AppComponent,

    // components
    SubjectsComponent,
    HomeComponent,
    SubjectDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
