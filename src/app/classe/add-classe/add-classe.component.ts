import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-classe',
  templateUrl: './add-classe.component.html',
  styleUrls: ['./add-classe.component.css']
})
export class AddClasseComponent implements OnInit {

  classe:{code_classe: string, nom:string, id_filiere:number}={
    code_classe:"",
    nom:"",
    id_filiere:0
  }
  constructor(private http:HttpClient) { }

  les_filieres:{id:number, code_filiere:string,nom:string,id_departement:number}[]=[]

  ngOnInit(): void {
    this.listFiliere()
  }
  listFiliere(){
    this.http.get("http://localhost/gestion_inscription/filiere/liste.php")
    .subscribe((reponse:any)=>{
      console.log("reponse du backend liste:",reponse)
      this.les_filieres = reponse
    })
  }

  ajouter(){
    this.http.post("http://localhost/gestion_inscription/classe/add.php",this.classe)
    .subscribe((reponse:any)=>{
      console.log("reponse du backend ajout:",reponse)

    this.classe = {
      code_classe:"",
      nom:"",
      id_filiere:0
    }
     
    })
  }



}
