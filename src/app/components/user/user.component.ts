import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

items:user[];
showdetails:boolean = false;
  constructor(private dataservice:DataService) { }
datapost:JsonData[]=[];
unit:JsonData={
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit \
    molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  };
j:JSON;
  ngOnInit() {
    this.items = [{name:"Ramesh",age:25,salary:50000},
                  {name:"Suresh",age:30,salary:75000}];
                 
  }

toggleuser() {
this.showdetails = !this.showdetails;
}

callservice(){
  this.datapost = this.dataservice.fetchData();
}

}
interface user{
  name:string;
  age:number;
  salary:number;
}

interface JsonData{
    userId:number;
    id:number; 
    title:string;
    body:string;
}