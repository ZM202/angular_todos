export class Employee{
  employee_id: number;
  name: string;
  username: string;
  password: string;

  constructor(employee_id: number, name: string, username: string, password: string){
    this.employee_id = employee_id;
    this.name = name;
    this.username = username;
    this.password = password;

  }
}
