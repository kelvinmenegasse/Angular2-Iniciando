import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[salaryColor]'
})
export class SalaryColorDirective {

  @Input()
  salaryColor;
  /* 
  Como essa diretiva será usada em um elemento html
  como h1 ou span, precisamos informar qual é esse elemento no constructor
  recebendo como parametro o Elemento HTML que estiver usando essa diretiva
  é necessário importar o ElementRef para poder utilizar a referência do elemento

  importamos o Input para permitir a entrada de dados para a nossa diretiva
  o input é um decorator que tem a função de permitir que ela seja visivel fora da diretiva

  a variável só fica acessível na estrutura se adicionarmos o @Input()
  caso contrário, só é acessível aqui na nossa diretiva

  */
  constructor(private element: ElementRef) 
  {
    setTimeout(() => {

      const nativeElement = this.element.nativeElement;
      const salary = parseFloat(this.salaryColor);
      
      nativeElement.style.color = salary > 2000 ? 'green' : 'red';
      /* nativeElement para trabalhar com o dom */

    }, 2);
  }

}
