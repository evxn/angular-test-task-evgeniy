import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

import { OrderModule } from 'ngx-order-pipe';

import { AppComponent } from './app.component';
import { CaseWallComponent } from './components/case-wall/case-wall.component';
import { CaseWallCommentComponent } from './components/case-wall-comment/case-wall-comment.component';
import { CaseWallEvidenceComponent } from './components/case-wall-evidence/case-wall-evidence.component';
import { CaseWallStatusChangedComponent } from './components/case-wall-status-changed/case-wall-status-changed.component';
import { environment } from '../environments/environment';
import {CaseWallItemComponent} from './components/case-wall-item/case-wall-item.component';
import { FavoriteComponent } from './components/favorite/favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    CaseWallComponent,
    CaseWallItemComponent,
    CaseWallCommentComponent,
    CaseWallEvidenceComponent,
    CaseWallStatusChangedComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    // Material
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    // orderBy pipe
    OrderModule
  ],
  providers: [{provide: 'ENV_IS_PROD', useValue: environment.production}],
  bootstrap: [AppComponent]
})
export class AppModule { }
