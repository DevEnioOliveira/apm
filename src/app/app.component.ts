import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  styleUrls: ['./app.component.css'],
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
        <a class="navbar-brand">{{pageTitle}}</a>
        <ul class="nav nav-pills">
            <li><a [routerLink]="['/home']" class="nav-link">Home</a></li>
            <li><a [routerLink]="['/products']" class="nav-link">Products List</a></li>
        </ul>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
})

export class AppComponent {
  pageTitle: string  = 'Personal Product Manager';
}

