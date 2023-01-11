import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filiere-departement',
  templateUrl: './filiere-departement.component.html',
  styleUrls: ['./filiere-departement.component.css']
})
export class FiliereDepartementComponent implements OnInit {

  id:number = 0
  constructor(private id_depart:ActivatedRoute,private http:HttpClient) {
    id_depart.params.subscribe((params:any)=>{
      this.id = params["id_departement"]

    })
   }

   les_filieres:{id:number,code_filiere:string,nom_filiere:string,id_departement:number}[]=[]


  ngOnInit(): void {
    this.listFiliere()
  }

  listFiliere(){
    this.http.get("http://localhost/gestion_inscription/listeFiliere.php?id="+this.id)
    .subscribe((reponse:any)=>{
      console.log("reponse du backend filiere_departement:",reponse)
      this.les_filieres = reponse
    })
  }

}
