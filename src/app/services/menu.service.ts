import { Injectable } from '@angular/core';
import { Http, Response  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {  } from 'rxjs/Operator';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(public http:Http) {
    this.http = http;
   }

   callService() : Observable<menu> {
     return this.http.get("http://localhost:4200/assets/data/input.json").map((res: Response) => {
       return <menu>res.json()});
}

private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
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