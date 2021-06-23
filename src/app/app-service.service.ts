import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  constructor(private http: HttpClient) { }
  login(user) {
    console.log(user);
    return this.http.post<any>(environment.api_url + "/users", user);
  }
}
