import { Component, OnInit, ViewChild } from '@angular/core';
import employees from '../employees';
import {Employee, EmployeeService} from '../employee.service';
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';
import { EmployeeEditModalComponent } from '../employee-edit-modal/employee-edit-modal.component';
import { EmployeeDeleteModalComponent } from '../employee-delete-modal/employee-delete-modal.component';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {

  employee: Employee;
  employeeToEdit: Employee;
  employeeToDelete: Employee;

  showMessageSuccess = false;
  
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

  @ViewChild(EmployeeEditModalComponent) 
  employeeEditModal: EmployeeEditModalComponent;

  
  @ViewChild(EmployeeDeleteModalComponent) 
  employeeDeleteModal: EmployeeDeleteModalComponent;
  
  constructor(public employeeService: EmployeeService) {
  
  }

  ngOnInit() {
  }

   openNewModal(){
     this.employeeNewModal.show();
   }
 
   openEditModal(employee : Employee){
    this.employeeToEdit = employee;
    this.employeeEditModal.show();
  }

  openDestroyModal(employee : Employee){
    this.employeeToDelete = employee;
    this.employeeDeleteModal.show();
  }

  getSalaryColor(employee)
  {
    return employee.salary > 2000 ? 'green' : 'red';
  }

  onNewEmployee(employee: Employee) {
    this.employee = employee;
    this.showMessageSuccess = true;
  }

  onEditEmployee(employee: Employee) {
    this.employee = employee;
  }

  onDestroyEmployee(employee: Employee) {
    this.employee = employee;
  }

}
