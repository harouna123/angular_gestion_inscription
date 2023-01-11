import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFiliereComponent } from './add-filiere/add-filiere.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListeFiliereComponent } from './liste-filiere/liste-filiere.component';
import { EditeFiliereComponent } from './edite-filiere/edite-filiere.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    AddFiliereComponent,
    ListeFiliereComponent,
    EditeFiliereComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class FiliereModule { }
