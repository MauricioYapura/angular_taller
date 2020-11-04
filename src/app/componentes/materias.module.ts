import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatgestionComponent } from './matgestion/matgestion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [MatgestionComponent, HomeComponent],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class MateriaModule { }