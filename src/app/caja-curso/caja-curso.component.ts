import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Curso } from '../curso';


@Component({
  selector: 'app-caja-curso',
  templateUrl: './caja-curso.component.html',
  styleUrls: ['./caja-curso.component.scss']
})
export class CajaCursoComponent implements OnInit {
  @Input() valor: Curso;
  constructor() { }



  /* viejo ts
  @Input() curso: any;
  @Output() datos:EventEmitter<any>=new EventEmitter();
  */

  ngOnInit(): void {
  }

  /* viejo ts
  idCurso() {
    this.datos.emit(this.curso.id);
  }
  */

}
