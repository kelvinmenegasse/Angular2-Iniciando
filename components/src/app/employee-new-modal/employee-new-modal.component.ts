import { Component, OnInit, ElementRef, Output, EventEmitter} from '@angular/core';
import { Employee, EmployeeService } from '../employee.service';

/* O typescript não entende o $ do jquery, entao precisamos declará-lo */
declare const $;

@Component({
  selector: 'employee-new-modal',
  templateUrl: './employee-new-modal.component.html',
  styleUrls: ['./employee-new-modal.component.css']
})

export class EmployeeNewModalComponent implements OnInit {

  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0,
  };

  /* Output é utilizado para que outro componente registre como ação este evento */
  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private element: ElementRef, private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  private getDivModal(): HTMLElement /* O retorno da função é do tipo HTMLElement */ {
    /* Pega nosso employee-new-modal */
    const nativeElement: HTMLElement = this.element.nativeElement;
    /* Se pegarmos nosso primeiro filho da div, será a div que queremos abrir */
    /* Componente > Form > Modal */
    return nativeElement.firstChild.firstChild as HTMLElement;
    /* o retorno mostra um erro sem o "as HTMLElement", já que estamos obrigando a função retornar esse tipo  */

  }

  /* Função para abrir o modal */
  show() {
    /* Pega o resultado do retorno da função getDivModal() que é o modal e exibe */
    const divModal = this.getDivModal();
    $(divModal).modal('show');
  }

  hide() {
    const divModal = this.getDivModal();
    $(divModal).modal('hide');
  }

  addEmployee(event) {
    const copy = Object.assign({}, this.employee);
    this.employeeService.addEmployee(copy);
    this.onSubmit.emit(copy);
    this.hide();
  }

}
