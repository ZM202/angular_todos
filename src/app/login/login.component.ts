import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('username') username: ElementRef | undefined;
  @ViewChild('password') password: ElementRef | undefined;

  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.activeRoute.queryParamMap.subscribe((queries) => {
      const logout = Boolean(queries.get('logout'));
      if (logout) {
        this.authService.logout();
        alert('Logging out.')
      }
    })
  }

  OnLoginClicked() {
    const username = this.username?.nativeElement.value;
    const password = this.password?.nativeElement.value;

    const employee = this.authService.login(username, password);

    if (employee === undefined) {
      alert('Invalid login information. Please try again');
    } else {
      alert('Welcome, ' + employee.name);
      this.router.navigate(['/communications']);
    }
  }

}
