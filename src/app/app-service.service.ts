import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
import { HttpClient} from '@angular/common/http';
import { AppSetting } from './appsetting'
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  private SERVERURL = AppSetting.API;
  constructor(private http: HttpClient) { }

  login(user){
    console.log(user);
    return this.http.post<any>(this.SERVERURL+"users",user);
  }


}
