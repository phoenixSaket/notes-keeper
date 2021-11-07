import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string = "";
  public password: string = "";
  public invalidEmail: boolean = false;
  public loginFailed: boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  inputChange(type, event) {

    let value = event.target.value;

    switch (type) {
      case 'email':
        this.email = value;
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
          this.invalidEmail = false;
        } else {
          this.invalidEmail = true;
        }
        break;
      case 'password':
        this.password = value;
        break;
      default:
        break;
    }
  }

  loginClicked() {
    console.log({ email: this.email, password: this.password });
    this.loginService.getLoginData({ email: this.email, password: this.password }).subscribe(
      (data) => {
        console.log("Data: ", data);
        if (data.status) {
          console.log("Login Success");
          this.loginFailed = false;
        } else {
          console.log("Login Failed");
          this.loginFailed = true;
        }
      }, (error) => {
        console.log("Error : ", error);
        this.loginFailed = true;
      }
    )
  }
}
