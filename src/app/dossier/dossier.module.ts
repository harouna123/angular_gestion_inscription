import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDossierComponent } from './add-dossier/add-dossier.component';
import { EditDossierComponent } from './edit-dossier/edit-dossier.component';
import { ListDossierComponent } from './list-dossier/list-dossier.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddDossierComponent,
    EditDossierComponent,
    ListDossierComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DossierModule { }
