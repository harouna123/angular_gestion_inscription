import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ListeComponent } from './liste/liste.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [
    AddComponent,
    ListeComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule

  ]
})
export class DepartementModule { }
