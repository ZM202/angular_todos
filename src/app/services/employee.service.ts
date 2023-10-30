import{Injectable} from "@angular/core";
import{Employee} from "../Models/employee";

@Injectable({
  providedIn: 'root'
})

export class EmployeeService{
  employees: Employee[] = [
    new Employee(1001, 'Admin', 'adminOnly', 'adminonly!'),
    new Employee(1002, 'Monday Weekday', 'mweekday', 'weekday!'),
    new Employee(1003, 'Saturday Weekend', 'sweekend', 'weekend!')
  ]
}
