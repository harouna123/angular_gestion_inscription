import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-dossier',
  templateUrl: './list-dossier.component.html',
  styleUrls: ['./list-dossier.component.css']
})
export class ListDossierComponent implements OnInit {

  getDossier:{id:number,nom_departement:string, nom_filiere:string,nom:string, nom_candidat:string,prenom_candidat:string,sexe:string,naissance:Date,adresse:string,nationalite:string,email:string,telephone:string,ecole_dorigine:string,diplome_obtenu:string,date_obtention:Date, statut:string}[]=[]

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.listeDossier()
  }

listeDossier(){
  this.http.get("http://localhost/gestion_inscription/dossier/liste.php")
  .subscribe((reponse:any)=>{
    this.getDossier=reponse
    console.log("liste dossier",reponse)

  })

}


}
