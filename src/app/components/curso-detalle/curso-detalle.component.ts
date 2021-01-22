import { Component, OnInit, Input, Output} from '@angular/core';
import { ActivatedRoute, Params } from'@angular/router';

import { TiendaService } from '../../services/tienda.service';
import { Curso } from '../../curso';


@Component({
  selector: 'app-curso-detalle',
  templateUrl: './curso-detalle.component.html',
  styleUrls: ['./curso-detalle.component.scss']
})
export class CursoDetalleComponent implements OnInit {

  curso: Curso | undefined;
  cursoo : Curso[] | undefined;

  constructor(private router:ActivatedRoute, private tiendaService : TiendaService) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params)=>{
      const id = parseInt(params.id);
      console.log(id);
      this.curso=this.tiendaService.getCurso(id);
      this.cursoo=this.tiendaService.getAllCursos();
    })
  }

  //// VIEJO TS //////////////////////////////////////////////////
  // cursos= [
  //   {
  //     id:1,
  //     imagen: "/assets/img/angular.png",
  //     titulo: "CURSO ANGULAR 10",
  //     descripcion: "Desarrollo web",
  //     link:"+ más información",
  //     precio: 50,
  //     tiempo: 40
  //   },
  //   {
  //     id:2,
  //     imagen: "/assets/img/php-2.png",
  //     titulo: "CURSO PHP 8",
  //     descripcion: "Back-end",
  //     link:"+ más información ",
  //     precio: 30,
  //     tiempo: 15
  //   },
  //   {
  //     id:3,
  //     imagen: "/assets/img/spring.png",
  //     titulo: "CURSO JAVA SPRING FRAMEWORK",
  //     descripcion: "Desarrollo web",
  //     link:"+ más información",
  //     precio: 40,
  //     tiempo: 100
  //   },
  //   {
  //     id:4,
  //     imagen: "/assets/img/wordpress.png",
  //     titulo: "CURSO WORDPRESS",
  //     descripcion: "Desarrollo web",
  //     link:"+ más información",
  //     precio: 25,
  //     tiempo: 45
  //   },
  //   {
  //     id:5,
  //     imagen: "/assets/img/js.png",
  //     titulo: "CURSO JAVASCRIPT",
  //     descripcion: "Desarrollo web",
  //     link:"+ más información",
  //     precio: 60,
  //     tiempo: 20
  //   },
  //   {
  //     id:6,
  //     imagen: "/assets/img/jquery.jpg",
  //     titulo: "CURSO JQUERY",
  //     descripcion: "Desarrollo web",
  //     link:"+ más información",
  //     precio: 70,
  //     tiempo: 116
  //   },
  //   {
  //     id:7,
  //     imagen: "/assets/img/react.png",
  //     titulo: "CURSO REACT",
  //     descripcion: "Desarrollo web",
  //     link:"+ más información",
  //     precio: 25,
  //     tiempo: 45
  //   }
  // ]

  // abrirCurso(id: number) {
  //   return this.cursos.find(curso => id === curso.id);
  // };
  /////////////////////////////////////////////////////////////////
}
