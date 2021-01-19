import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Curso } from '../curso';


@Component({
  selector: 'app-caja-curso',
  templateUrl: './caja-curso.component.html',
  styleUrls: ['./caja-curso.component.scss']
})
export class CajaCursoComponent implements OnInit {
  /*valor={
    id: 0,
    imagen: "string",
    imagen2: "string",
    titulo:" string",
    titulo2: "string",
    descripcion: "string",
    descripcion2: "string",
    descripcionGeneral: "strin",
    link: "string",
    precio:0,
    tiempo:0
  }*/
  @Input() valor: Curso;
  constructor() {


  }



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
