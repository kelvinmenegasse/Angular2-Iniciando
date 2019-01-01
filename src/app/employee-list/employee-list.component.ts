import { Component, OnInit } from '@angular/core';
import employees from '../employees';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  //employees = employees;
  
  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
  }

  getSalaryColor(employee)
  {
    return employee.salary > 2000 ? 'green' : 'red';
  }

}
