import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor( private httpClient:HttpClient) { }
  getContacts(){
return this.httpClient.get('http://localhost:3000/User');
  }
  getCollege(){
    console.log("College table");
    return this.httpClient.get('http://localhost:3000/College');
  }
}