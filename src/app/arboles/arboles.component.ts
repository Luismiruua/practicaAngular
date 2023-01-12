import  { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { Arbol } from "../Arbol";
import { arboles } from '../mock-arboles';

@Component({
    selector:"app-arboles",
    templateUrl: "./arboles.component.html",
    styleUrls: ['./arboles.component.scss'],
    template:``,

})
export class ArbolesComponent implements OnInit{
rows = [];
    columns =[]; //[{ prop: 'name' }, { name: 'Gender' }, { name: 'Company', sortable: false }];
  
    constructor() {
      
    }
    ngOnInit(): void {

    }
  
   
    Arboles? = arboles;

    eliminar(arbol: Arbol): void{
        //console.log()
        //this.arboles.eliminar(arboles.)
    }
    marcar(arbol: Arbol): void{

    }
    

}