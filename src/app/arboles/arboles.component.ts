import  { Component, OnInit } from "@angular/core";
import { Arbol } from "../arbol";
import { arboles } from '../mock-arboles';

@Component({
    selector:"app-arboles",
    templateUrl: "./arboles.component.html",
    styleUrls: ['./arboles.component.scss'],
    template:``,

})
export class ArbolesComponent implements OnInit{
    nmbArb?: String;
    tipo?: String;
  
    constructor() {
      
    }
    
    ngOnInit(): void {

    }

    Arboles = arboles;

    public borradi(arbol:Arbol) :void{
        this.Arboles = this.Arboles.filter(arrayArboles => arrayArboles !== arbol);
    }
    public marcadi(favorito:boolean, arbol:Arbol): void{
        //this.Arboles?.find(arrayArbol => arrayArbol === arbol).favorito = favorito;
    }
}