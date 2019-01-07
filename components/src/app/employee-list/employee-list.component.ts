import { Component, OnInit, ViewChild } from '@angular/core';
import employees from '../employees';
import {EmployeeService} from '../employee.service';
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  /* 
    employeeNewModal pega a instância do componente employee-new-modal declarado 
    no template desse componente (employee-list) e queremos que ela seja do nosso tipo
    EmployeeNewModalComponent
  */

  /* ViewChild é um decorator que pega uma referência de um elemento*/
  /*  
    declaramos dentro do @ViewChild a referência que queremos acessar 
    (neste caso o componente EmployeeNewModalComponent)
    dentro do nosso template (employee-list)
  */
  @ViewChild(EmployeeNewModalComponent) 
  /* coloque dentro da variável employeeNewModal a referência do Component para podermos acessa-lo*/
  employeeNewModal: EmployeeNewModalComponent;
  
  constructor(public employeeService: EmployeeService) {
    setTimeout(() => {
      this.employeeNewModal.show();
    }, 2000);  
  }

  ngOnInit() {
  }

  getSalaryColor(employee)
  {
    return employee.salary > 2000 ? 'green' : 'red';
  }

}
