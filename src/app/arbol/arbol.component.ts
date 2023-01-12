import { Component, Input, OnInit } from '@angular/core';
import { FormArrayName, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { arboles } from '../mock-arboles';

//import { faCoffee } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-arbol',
  templateUrl: './arbol.component.html',
  styleUrls: ['./arbol.component.scss']
}) 
export class ArbolComponent implements OnInit{
  @Input() nombreArb?: string;
  @Input() opcTipo?: string;

  public formTree?: FormGroup;

  //public nombreArb?:string;
  //public opcTipo?:string;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit() : void{
    this.formTree = this.formBuilder.group({
      nombreArb:['',[Validators.required, Validators.minLength(1)]],
      tipoArb:['',[Validators.required, Validators.requiredTrue]]

    })
  }

  //ponerElTipo(tipo: string): void{this.opcTipo = tipo;}
 
  guardar2(): void{
    console.log(this.nombreArb, this.opcTipo)
    //console.log(this.formTree.value);
    //this.arboles.push(this.arbol);
    arboles.push({
      nombreArb: this.nombreArb,
      tipo: this.opcTipo,
      //favorito: false
    });
    console.log(arboles);
  }

  
  //completeLogin(form: NgForm){
    //login.reset();
    //console.log(form.value)
  //}

}
