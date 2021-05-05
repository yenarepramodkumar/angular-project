import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PracticeModule } from './practice/practice.module';
import { ProjectModule } from './project/project.module';


@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    // PracticeModule,
    ProjectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
