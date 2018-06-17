import { Component, OnInit } from '@angular/core';
import { MenuService } from "../../services/menu.service";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public menuService:MenuService) { 
    this.menuService = menuService;
  }

  ngOnInit() {
    this.menuService.callService();
  }

}
