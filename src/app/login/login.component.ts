import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from './../app-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AppServiceService, private _router: Router) { }

  public loginuserdata = { email: '', password: '' };

  ngOnInit() {
    var self = this;
    if (localStorage.hasOwnProperty("storageselectedclient") && (localStorage.getItem("storageselectedclient") != "")) {
      window.location.replace(location.origin + "/home");
    } else {
      localStorage.clear();
    }
  }


  loginuser() {
    this.auth.login(this.loginuserdata)
      .subscribe(
        res => {
          if (res.code == "204") {
            alert("usename and passsword is incorrect");
          } else {
            console.log(res);

            localStorage.setItem('username', res.username)
            localStorage.setItem('userid', res.userid) //name accordingly. in my end login is not working that's why i can't see them
            localStorage.setItem('token', res.token)
            localStorage.setItem('email', res.result.replace(/\s/g, ""))
            this._router.navigate(['/home']);
          }
        },
        err => {
          console.log(err);
        }

      )
  }

}
