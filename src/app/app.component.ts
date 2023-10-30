import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <div class="primary_container">
    <div class="main_banner">
      <p>Insurance registration ends on the end of October (10.31.2023)**</p>
    </div>

    <header>
      <div class="main_container">
        <div class="header_items">
          <a mat-button [routerLink]="['']">
            <span>Home</span>
          </a>
          <a mat-button [routerLink]="['/communications']">
            <span>Communications</span>
          </a>
          <button mat-button [matMenuTriggerFor]="profile">
            <div class="dropdown_options"><span>Profile</span>
              <i class="material-icons">arrow_drop_down</i></div>
            <mat-menu #profile="matMenu" class="dropdown_menu">
              <a mat-menu-item [routerLink]="['/login']"><span>Login</span></a>
              <a mat-menu-item [routerLink]="['/login']" [queryParams]="{logout: true}"><span>Logout</span></a>
            </mat-menu>
          </button>
        </div>
      </div>
      <router-outlet></router-outlet>
    </header>
    </div>
 `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todos';
}
