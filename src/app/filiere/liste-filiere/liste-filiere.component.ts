import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-filiere',
  templateUrl: './liste-filiere.component.html',
  styleUrls: ['./liste-filiere.component.css']
})
export class ListeFiliereComponent implements OnInit {

  constructor(private http:HttpClient) { }

  les_filieres:{id:number,code_filiere:string,nom_filiere:string,id_departement:number}[]=[]

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

}
