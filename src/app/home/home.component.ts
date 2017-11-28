import { AppService } from './../app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AppService]
})
export class HomeComponent {
  constructor(
    private _service: AppService) { }

  ngOnInit() {
    this._service.checkCredentials();
  }

  logout() {
    this._service.logout();
  }
}
