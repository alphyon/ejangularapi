import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContentService {

users:any[] = [];
urlService = "http://ejemplo.dev/users/";
user:any = {};

  constructor(private http:Http) {
    console.log("Ready for use")
   }

   getUsers(){

     let url = this.urlService;
     return  this.http.get( url)
     .map(res =>{
       this.users=res.json().data;
     })


   }

   getUser(id:number){
     let query = `${ id }/`;
     let url = this.urlService + query;

     return  this.http.get( url)
     .map(res =>{
       this.user=res.json().data;
       console.log("DESDE SERVICE::==>:")
       console.log(this.user);

       return this.user;

     })

   }
}
