import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  public email: string = "";
  public password: string = "";
  public invalidEmail: string = "";
  public invalidPassword: string = "";
  public confirmPassword: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  inputChange(text: string, event: any) {
    let value = event.target.value;

    switch (text) {
      case 'email':
        this.email = value;
        break;
      case 'password':
        this.password = value;
        break;
      case 'confirm Password':
        this.confirmPassword = value;
        break;
      default:
        break;
    }
  }

  createClicked() {

  }
}
