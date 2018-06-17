import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

menu:menu;
data: Observable<menu>;
errorMessage="error during service call";
  constructor(public menuService:MenuService) { 
    this.menuService = menuService;
  }

  ngOnInit() {
    this.data = this.menuService.callService();
    this.data.subscribe(menu1 => {this.menu = menu1;
       console.log(menu1);
  },
    error =>  this.errorMessage = <any>error);
  
 }

}

interface menu {
  id:string;
  value:string;
  popup: menuitem[];
}

interface menuitem {
  value:string;
  onclick:string;
}