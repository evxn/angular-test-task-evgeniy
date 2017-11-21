import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CaseWallComponent } from './components/case-wall/case-wall.component';
import { CaseWallCommentComponent } from './components/case-wall-comment/case-wall-comment.component';
import { CaseWallEvidenceComponent } from './components/case-wall-evidence/case-wall-evidence.component';
import { CaseWallStatusChangedComponent } from './components/case-wall-status-changed/case-wall-status-changed.component';


@NgModule({
  declarations: [
    AppComponent,
    CaseWallComponent,
    CaseWallCommentComponent,
    CaseWallEvidenceComponent,
    CaseWallStatusChangedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
