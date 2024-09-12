import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complete, DevModel } from '../models/dev';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DevService {

  constructor(private http:HttpClient) { }

  getDev():Observable <Complete>{
    return this.http.get<Complete>("https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json")
  }
}
