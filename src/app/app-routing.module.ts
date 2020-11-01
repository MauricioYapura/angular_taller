import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Validators } from '@angular/forms';
import { MatgestionComponent } from './componentes/matgestion/matgestion.component';



const routes: Routes = [
 {path:'', component: MatgestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
