import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DevModel } from '../models/dev';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DevService {

  constructor(private http:HttpClient) { }

  getDev():Observable <DevModel>{
    return this.http.get<DevModel>("https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json")
  }
}
