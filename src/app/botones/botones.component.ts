import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Arbol } from '../arbol';
@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.scss']
})
export class BotonesComponent {
  @Input() arbol!: Arbol;
  @Output() eventBorrar: EventEmitter<void> = new EventEmitter();
  @Output() eventMarcar: EventEmitter<boolean> = new EventEmitter();


  public borradi():void{
    this.eventBorrar.emit();
  }
  public marcadi():void{
    this.eventMarcar.emit(!this.arbol.favorito);
  }
}
