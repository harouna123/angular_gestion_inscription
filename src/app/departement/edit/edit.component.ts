import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:number = 0
  constructor(private id_depart:ActivatedRoute,private http:HttpClient) {
    id_depart.params.subscribe((params:any)=>{
      this.id = params["id_depart"]

    })
   }

   departements:{id:number,code_depart:string, nom_departement: string, chef_departement:string, secretaire:string }={
    id:this.id,
    code_depart:"",
    nom_departement:"",
    chef_departement:"",
    secretaire:""

  }

  ngOnInit(): void {
    this.editDepartement()
  }

  editDepartement(){
    this.http.get("http://localhost/gestion_inscription/departement/edit.php?id="+this.id)
    .subscribe((reponse:any)=>{
      this.departements = reponse
      console.log("reponse edit:",this.departements)

    })
  }

  update(){
    this.http.post("http://localhost/gestion_inscription/departement/update.php",this.departements)
    .subscribe((reponse:any)=>{
      console.log("reponse update:",reponse)
      this.departements={
        id:this.id,
        code_depart:"",
        nom_departement:"",
        chef_departement:"",
        secretaire:""
    
      }
    })
  }

}
