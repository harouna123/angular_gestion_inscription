import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edite-filiere',
  templateUrl: './edite-filiere.component.html',
  styleUrls: ['./edite-filiere.component.css']
})
export class EditeFiliereComponent implements OnInit {
  id:number=0
  constructor(private id_filiere:ActivatedRoute,private http:HttpClient) {
    id_filiere.params.subscribe((params:any)=>{
      this.id = params["id_filiere"]
    })

   }

   les_departements:{id:number,code_depart:string, nom: string, chef_departement:string, secretaire:string }[] = []


  filiere:{id:number,code_filiere:string,nom:string,id_departement:number}={
    id:this.id,code_filiere:"",nom:"",id_departement:0
  }

  ngOnInit(): void {
    this.editFiliere()
    this.listeFiliere()
  }

  editFiliere(){
    this.http.get("http://localhost/gestion_inscription/filiere/edit.php?id="+this.id)
    .subscribe((reponse:any)=>{
      this.filiere = reponse
      console.log("reponse edit:",this.filiere)
    })
  }

  listeFiliere(){
    this.http.get("http://localhost/gestion_inscription/departement/listeDepartement.php")
    .subscribe((reponse:any)=>{
     this.les_departements = reponse
     console.log("reponse du backend:",this.les_departements)

    })
  }

  update(){
    this.http.post("http://localhost/gestion_inscription/filiere/update.php",this.filiere)
    .subscribe((reponse:any)=>{
      console.log("reponse update:",reponse)
      this.filiere={
        id:this.id,
        code_filiere:"",
        nom:"",		
	      id_departement:0   
      }
    })
  }

}
