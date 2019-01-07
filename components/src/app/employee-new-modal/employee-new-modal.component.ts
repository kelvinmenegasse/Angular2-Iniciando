import { Component, OnInit, ElementRef } from '@angular/core';
import {Employee} from '../employee.service';

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
  constructor(private element: ElementRef) { }

  ngOnInit() {
  }

  private getDivModal() : HTMLElement /* O retorno da função é do tipo HTMLElement */
  {
    /* Pega nosso employee-new-modal */
    const nativeElement: HTMLElement = this.element.nativeElement;
    /* Se pegarmos nosso primeiro filho da div, será a div que queremos abrir */
    return nativeElement.firstChild as HTMLElement;
    /* o retorno mostra um erro sem o "as HTMLElement", já que estamos obrigando a função retornar esse tipo  */

  }

  /* Função para abrir o modal */
  show() {
    /* Pega o resultado do retorno da função getDivModal() que é o modal e exibe */
    const divModal = this.getDivModal();
    $(divModal).modal('show');
  }



}
