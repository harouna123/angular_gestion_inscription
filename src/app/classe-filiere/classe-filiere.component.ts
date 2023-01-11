import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-classe-filiere',
  templateUrl: './classe-filiere.component.html',
  styleUrls: ['./classe-filiere.component.css']
})
export class ClasseFiliereComponent implements OnInit {

  id:number = 0
  constructor(private id_filiere:ActivatedRoute,private http:HttpClient) {
    id_filiere.params.subscribe((params:any)=>{
      this.id = params["id_filiere"]

    })
   }

   les_classes:{id: number, code_classe:string, nom:string, id_filiere:number}[]=[]

  ngOnInit(): void {
    this.lister()
    console.log("id  =",this.id)
  }


  lister(){
    this.http.get("http://localhost/gestion_inscription/listeClasse.php?id="+this.id)
    .subscribe((reponse:any)=>{
      console.log("reponse du backend classe_filiere:",reponse)
      this.les_classes = reponse
    })
  }

}
