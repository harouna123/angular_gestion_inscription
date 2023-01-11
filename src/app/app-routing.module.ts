import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ClasseFiliereComponent } from './classe-filiere/classe-filiere.component';
import { AddClasseComponent } from './classe/add-classe/add-classe.component';
import { ListeClasseComponent } from './classe/liste-classe/liste-classe.component';
import { AddComponent } from './departement/add/add.component';
import { EditComponent } from './departement/edit/edit.component';
import { ListeComponent } from './departement/liste/liste.component';
import { AddDossierComponent } from './dossier/add-dossier/add-dossier.component';
import { ListDossierComponent } from './dossier/list-dossier/list-dossier.component';
import { FiliereDepartementComponent } from './filiere-departement/filiere-departement.component';
import { AddFiliereComponent } from './filiere/add-filiere/add-filiere.component';
import { EditeFiliereComponent } from './filiere/edite-filiere/edite-filiere.component';
import { ListeFiliereComponent } from './filiere/liste-filiere/liste-filiere.component';

const routes: Routes = [
  {path:'acceuil',component:AcceuilComponent},
  {path:'filiere_departement/:id_departement',component:FiliereDepartementComponent},
  {path:'classe_filiere/:id_filiere',component:ClasseFiliereComponent},
  {path:'add_departement',component:AddComponent},
  {path:'add_filiere',component:AddFiliereComponent},
  {path:'liste_departement',component:ListeComponent},
  {path:'edit_departement/:id_depart',component:EditComponent},
  {path:'list_filiere',component:ListeFiliereComponent},
  {path:'edit_filiere/:id_filiere',component:EditeFiliereComponent},
  {path:'add_classe',component:AddClasseComponent},
  {path:'liste_classe',component:ListeClasseComponent},
  {path:'add_dossier/:id_classe',component:AddDossierComponent},
  {path:'liste_dossier',component:ListDossierComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
