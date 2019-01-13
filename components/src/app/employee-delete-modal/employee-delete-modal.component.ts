import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { Employee, EmployeeService } from '../employee.service';

/* O typescript não entende o $ do jquery, entao precisamos declará-lo */
declare const $;

@Component({
  selector: 'employee-delete-modal',
  templateUrl: './employee-delete-modal.component.html',
  styleUrls: ['./employee-delete-modal.component.css']
})

export class EmployeeDeleteModalComponent implements OnInit {

  @Input()
  employee: Employee;

  @Output()
  onDestroy: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private element: ElementRef, private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  private getDivModal(): HTMLElement /* O retorno da função é do tipo HTMLElement */ {
    /* Pega nosso employee-delete-modal */
    const nativeElement: HTMLElement = this.element.nativeElement;
    /* Se pegarmos nosso primeiro filho da div, será a div que queremos abrir */
    /* Componente > Modal */
    return nativeElement.firstChild as HTMLElement;
    /* o retorno mostra um erro sem o "as HTMLElement", já que estamos obrigando a função retornar esse tipo  */

  }

  destroy() {
    const copy = Object.assign({}, this.employee);
    this.employeeService.destroyEmployee(this.employee);
    this.onDestroy.emit(copy);
    this.hide();
  }

  show() {
    /* Pega o resultado do retorno da função getDivModal() que é o modal e exibe */
    const divModal = this.getDivModal();
    $(divModal).modal('show');
  }

  hide() {
    const divModal = this.getDivModal();
    $(divModal).modal('hide');
  }

}
