import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menus="/api/listaRolme/"; // direccion de la api
  private roles="/api/listaroles"
  constructor(private httpClient:HttpClient) { }

  getRoles(){
    return this.httpClient.get(this.roles);
  }
  getMenus(codr:number){
    return this.httpClient.get(this.menus+codr);
  }
}
