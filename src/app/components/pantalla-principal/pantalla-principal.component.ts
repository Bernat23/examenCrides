import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DragonsApiService } from 'src/app/serveis/dragonsApi';

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrls: ['./pantalla-principal.component.css']
})
export class PantallaPrincipalComponent implements OnInit {

  monstres!: Array<any>;
  imatge!: any;
  constructor(private dragonsApi: DragonsApiService) { }

  ngOnInit(): void {
    this.imatge = "";
    this.getMonstres();
  }

  getMonstres() {
    this.dragonsApi.getDragons().subscribe(
      (data:any) => {
        this.monstres = data.results;
        console.log(this.monstres)
      },
    );
    
  }

  getImatge(monstre:any) {
    this.imatge = 'https://www.dnd5eapi.co';
    this.dragonsApi.getImatges(monstre.url).subscribe(
      (data:any) => {
        this.imatge += data.image;
        console.log(this.imatge)
      })
  }

  veure(index:number) {
    this.getImatge(this.monstres[index]);
  }


  veureDades() {
    let llistaChecks = document.getElementsByTagName("input");
    let seleccionats : Array<number> = [];
    for(var i = 0; i < llistaChecks.length; i++) {
      if(llistaChecks[i].checked && !seleccionats.includes(i)) {
        seleccionats.push(i);
      }
    }
    this.buscarMonstres(seleccionats);
  }

  buscarMonstres(seleccionats: Array<number>) {
    
  }

}
