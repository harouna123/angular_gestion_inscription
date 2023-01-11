import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-filiere',
  templateUrl: './add-filiere.component.html',
  styleUrls: ['./add-filiere.component.css']
})
export class AddFiliereComponent implements OnInit {

  constructor(private http:HttpClient) { }
  les_departements:{id:number,code_depart:string, nom_departement: string, chef_departement:string, secretaire:string }[] = []
  filiere:{code_filiere:string,nom_filiere:string,id_departement:number}={
    code_filiere:"",nom_filiere:"",id_departement:0
  }
  ngOnInit(): void {
    this.listeFiliere()

  }

  onSubmitForm(form: NgForm) {
    this.filiere=form.value
    this.http.post("http://localhost/gestion_inscription/filiere/ajouter.php",this.filiere)
    .subscribe((reponse:any)=>{
      console.log("reponse du backend:",reponse)
      this.filiere = {
        code_filiere:"",nom_filiere:"",id_departement:0
      }
    })
  }





  listeFiliere(){
    this.http.get("http://localhost/gestion_inscription/departement/listeDepartement.php")
    .subscribe((reponse:any)=>{
     this.les_departements = reponse
     console.log("reponse du backend:",this.les_departements)

    })

  }

}
