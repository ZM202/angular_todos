import {inject, Injectable} from "@angular/core";
import{EmployeeService} from "./employee.service";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLogged: Boolean = false;
  employeeService: EmployeeService = inject(EmployeeService);

  login(username: string, password: string) {
    let employee = this.employeeService.employees.find((e) =>
      e.username && e.password === password);

    this.isLogged = employee !== undefined;
    return employee;
  }

  logout(){
    this.isLogged = false;
  }

  IsAuthenticated(){
    return this.isLogged;
  }

}

