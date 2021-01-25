import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Curso } from '../../curso';


@Component({
  selector: 'app-caja-curso',
  templateUrl: './caja-curso.component.html',
  styleUrls: ['./caja-curso.component.scss']
})
export class CajaCursoComponent implements OnInit {

  @Input() valor: Curso | undefined;
  @Output() comprarCurso: EventEmitter<any>=new EventEmitter();

  constructor() {
  }



  /* viejo ts
  @Input() curso: any;
  @Output() datos:EventEmitter<any>=new EventEmitter();
  */

  ngOnInit(): void {
  }

  comprar(){
    this.comprarCurso.emit(this.valor);
  }

  /* viejo ts
  idCurso() {
    this.datos.emit(this.curso.id);
  }
  */

}
