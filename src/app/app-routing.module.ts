import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArbolComponent} from 'src/app/arbol/arbol.component'
const routes: Routes = [
  {path:'arbol',
  component:ArbolComponent},
  {path:'arboles',
  component:ArbolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
