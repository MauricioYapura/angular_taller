import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MateriasService } from './materias.service';
import { from } from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
import { MenuService } from './menu.service';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers : [
    MateriasService,
    MenuService
  ]
})
export class ServiciosModule { }
