import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-classe',
  templateUrl: './liste-classe.component.html',
  styleUrls: ['./liste-classe.component.css']
})
export class ListeClasseComponent implements OnInit {

  les_classes:{id: number, code_classe:string, nom:string, id_filiere:number}[]=[]

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.lister()
  }
  
  lister(){
    this.http.get("http://localhost/gestion_inscription/classe/liste.php")
    .subscribe((reponse:any)=>{
      console.log("reponse du backend liste:",reponse)
      this.les_classes = reponse
    })
  }

}
