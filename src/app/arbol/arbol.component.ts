import { Component, OnInit } from '@angular/core';
import { arboles } from '../mock-arboles';

//import { faCoffee } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-arbol',
  templateUrl: './arbol.component.html',
  styleUrls: ['./arbol.component.scss']
})
export class ArbolComponent implements OnInit {
  nombreArb?: string;
  opcTipo?: string;

  constructor() { }

  ngOnInit(): void {

  }

  //ponerElTipo(tipo: string): void{this.opcTipo = tipo;}

  guardar2(): void {
    console.log(this.nombreArb, this.opcTipo)
    //console.log(this.formTree.value);
    //this.arboles.push(this.arbol);

    arboles.push({
      nombreArb: this.nombreArb,
      tipo: this.opcTipo,
      favorito: false
    });
    this.nombreArb = "";
    this.opcTipo = "";


    console.log(arboles);
  }


  //completeLogin(form: NgForm){
  //login.reset();
  //console.log(form.value)
  //}

}
