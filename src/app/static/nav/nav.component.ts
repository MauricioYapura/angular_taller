import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../servicios/menu.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  roles:any;
  menus:any;
  constructor(private menu:MenuService) { }
  codRoles:number;
  ngOnInit() {
    this.menu.getRoles().subscribe(resp=>{
        this.roles=resp;
    })
    
    this.menu.getMenus(1).subscribe(res=>{
      this.menus=res;
    })
  }

  caputar(){
    console.log(this.codRoles)
    this.menu.getMenus(this.codRoles).subscribe(res=>{
     
      this.menus=res;
      console.log(this.menus)
    })
  }

}
