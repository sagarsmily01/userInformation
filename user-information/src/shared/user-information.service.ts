import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {

  constructor(private http: HttpClient ) { }

  public getUserItems(url: any){
    return this.http.get(url); 
    }
}
