import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArbolesComponent } from './arboles/arboles.component';
import { ArbolComponent } from './arbol/arbol.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, 
    ArbolesComponent, 
    ArbolComponent, 
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
