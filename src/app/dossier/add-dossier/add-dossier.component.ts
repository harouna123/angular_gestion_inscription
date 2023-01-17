import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-dossier',
  templateUrl: './add-dossier.component.html',
  styleUrls: ['./add-dossier.component.css']
})
export class AddDossierComponent implements OnInit {

  id:number = 0

  getFilDepart!:{id:number,nom_departement:string,code_depart:string,code_filiere:string,nom_filiere:string,code_classe:string}

  dossiers:{id_classe:number,nom_candidat:string,prenom_candidat:string,sexe:string,naissance:Date,adresse:string,nationalite:string,email:string,telephone:string,ecole_dorigine:string,diplome_obtenu:string,date_obtention:Date}={
    id_classe:this.id,
    nom_candidat:"",
    prenom_candidat:"",
    sexe:"",
    naissance: new Date(),
    adresse:"",
    nationalite:"",
    email:"",
    telephone:"",
    ecole_dorigine:"",
    diplome_obtenu:"",
    date_obtention:new Date()

  }

  constructor(private id_classe:ActivatedRoute,private http:HttpClient) {
    id_classe.params.subscribe((params:any)=>{
      this.id = params["id_classe"]
      this.dossiers.id_classe = this.id
    })
  
   }
  
  


  
  ajouter(){
    this.http.post("http://localhost/gestion_inscription/dossier/ajouter.php",this.dossiers)
    .subscribe((reponse:any)=>{
      console.log("reponse ajouter",reponse)
      

    })
  }

  ngOnInit(): void {
    this.getFiliereDepartement()
  }


  getFiliereDepartement(){
    this.http.get("http://localhost/gestion_inscription/getFiliereDepartement.php?id="+this.id)
    .subscribe((reponse:any)=>{
      this.getFilDepart = reponse
      console.log("reponse du backend filiere_departements",this.getFilDepart)

    })
  }

}
