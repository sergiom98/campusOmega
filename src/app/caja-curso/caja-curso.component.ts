import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-caja-curso',
  templateUrl: './caja-curso.component.html',
  styleUrls: ['./caja-curso.component.scss']
})
export class CajaCursoComponent implements OnInit {

  constructor() { }

  @Input() curso: any;
  @Output() datos:EventEmitter<any>=new EventEmitter();

  ngOnInit(): void {
  }


  idCurso() {
    this.datos.emit(this.curso.id);
  }

}
