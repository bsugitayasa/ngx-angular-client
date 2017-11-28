import { AppService, Foo } from './../../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css'],
  providers: [AppService]
})
export class FooComponent {
  public foo = new Foo(1, 'sample foo');
  private foosUrl = 'http://localhost:8081/ngx-admin-server/foos/';

  constructor(private _service: AppService) { }

  getFoo() {
    this._service.getResource(this.foosUrl + this.foo.id)
      .subscribe(
      data => this.foo = data,
      error => this.foo.name = 'Error');
  }
}
