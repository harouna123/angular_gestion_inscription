import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClasseComponent } from './add-classe/add-classe.component';
import { ListeClasseComponent } from './liste-classe/liste-classe.component';
import { EditeClasseComponent } from './edite-classe/edite-classe.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    AddClasseComponent,
    ListeClasseComponent,
    EditeClasseComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule

  
  ]
})
export class ClasseModule { }
