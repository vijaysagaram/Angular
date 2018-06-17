  import { Injectable } from '@angular/core';
  import { Http } from '@angular/http';
  import { } from 'rxjs/Operator';

  @Injectable({
    providedIn: 'root'
  })
  export class DataService {
  j:JSON;
  jsonarr:JsonData[]=[];
    constructor(public http:Http) {
      this.http = http;
    }
    fetchData() {
      this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(val => this.j=val.json());
      new JsonData().fillFromJSON(JSON.stringify(this.j),this.jsonarr);
      return this.jsonarr;
    }
  }

  class Serializable {
    jd:JsonData;
      fillFromJSON(json: string,jsonarr: JsonData[]) {
          var jsonObj = JSON.parse(json);                
          for (var outerPropName in jsonObj) {
            this.jd = new JsonData();
            for (var innerPropName in jsonObj[outerPropName]) {
              this.jd[innerPropName] = jsonObj[outerPropName][innerPropName];            
            }
            jsonarr.push(this.jd);
          }  
          console.log(jsonarr);     
      }
  }

  class JsonData extends Serializable {
      userId:number;
      id:number; 
      title:string;
      body:string;   
  }