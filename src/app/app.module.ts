import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArbolesComponent } from './arboles/arboles.component';
import { ArbolComponent } from './arbol/arbol.component';
import { BotonesComponent } from './botones/botones.component';

@NgModule({
  declarations: [
    AppComponent, 
    ArbolesComponent, 
    ArbolComponent, BotonesComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DataTablesModule,
    ReactiveFormsModule

  ],
  exports: [
    AppComponent, ArbolesComponent, ArbolComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
