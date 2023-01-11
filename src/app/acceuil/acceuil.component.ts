import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  departements:{id:number,code_depart:string,nom_departement:string,chef_departement:string,secretaire:string}[]=[]


  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.listeDepartement()
  }

  listeDepartement(){
    this.http.get("http://localhost/gestion_inscription/departement/listeDepartement.php")
    .subscribe((reponse:any)=>{
      this.departements = reponse
      console.log("reponse du backend:",reponse)
    })
  }

}
