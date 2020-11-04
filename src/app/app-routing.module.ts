import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Validators } from '@angular/forms';
import { MatgestionComponent } from './componentes/matgestion/matgestion.component';
import { HomeComponent } from './componentes/home/home.component';



const routes: Routes = [
 {path:'', component: HomeComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
