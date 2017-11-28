import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AppService]
})
export class LoginComponent {
  public loginData = { username: "", password: "" };

  constructor(private _service: AppService) { }

  login() {
    this._service.obtainAccessToken(this.loginData);
  }

}
