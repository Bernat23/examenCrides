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
  constructor(private dragonsApi: DragonsApiService) { }

  ngOnInit(): void {
    this.getMonstres();
  }

  getMonstres() {
    this.dragonsApi.getDragons().subscribe(
      (data:any) => {
        this.monstres = data;
        console.log(this.monstres)
      },
    );
    
  }

}
