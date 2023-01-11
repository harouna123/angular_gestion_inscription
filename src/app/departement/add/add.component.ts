import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements  OnInit {

  depart:{code_depart:string, nom_departement: string, chef_depart:string, secretaire:string }={
    code_depart:"", nom_departement:"", chef_depart:"",secretaire:""
  }


  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  ajouter(){
    this.http.post("http://localhost/gestion_inscription/departement/ajouter.php",this.depart)
    .subscribe((reponse:any)=>{
      console.log('reponse du backend ',reponse)
      console.log(this.depart)
      this.depart={code_depart:"", nom_departement:"", chef_depart:"",secretaire:""}
    })

  }

}
