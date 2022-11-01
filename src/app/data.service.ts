import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) { }
  getData():Observable<any>{
    return this.hc.get('https://reqres.in/api/users?page=2')
  }
}
