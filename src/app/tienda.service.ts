import { Injectable } from '@angular/core';
import { Curso } from './curso'

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  tiendaB: Curso[]= [
    {
      id:1,
      imagen: "/assets/img/angular.png",
      imagen2: "/assets/img/NoPath.png",
      titulo: "CURSO ANGULAR 10",
      titulo2: "ANGULAR 10 CURSO COMPLETO",
      descripcion: "Desarrollo web",
      descripcion2: "Aprende a desarrollar aplicaciones web con Angular 10 de forma práctica y desde 0",
      descripcionGeneral: "s",
      link:"+ más información",
      precio: 50,
      tiempo: 40
    },
    {
      id:2,
      imagen: "/assets/img/php-2.png",
      imagen2: "/assets/img/php2.png",
      titulo: "CURSO PHP 8",
      titulo2: "",
      descripcion: "Back-end",
      descripcion2: "",
      descripcionGeneral: "",
      link:"+ más información ",
      precio: 30,
      tiempo: 15
    },
    {
      id:3,
      imagen: "/assets/img/spring.png",
      imagen2: "/assets/img/java2.png",
      titulo: "CURSO JAVA SPRING FRAMEWORK",
      titulo2: "",
      descripcion: "Desarrollo web",
      descripcion2: "",
      descripcionGeneral: "",
      link:"+ más información",
      precio: 40,
      tiempo: 100
    },
    {
      id:4,
      imagen: "/assets/img/wordpress.png",
      imagen2: "/assets/img/wordpress2.png",
      titulo: "CURSO WORDPRESS",
      titulo2: "",
      descripcion: "Desarrollo web",
      descripcion2: "",
      descripcionGeneral: "",
      link:"+ más información",
      precio: 25,
      tiempo: 45
    },
    {
      id:5,
      imagen: "/assets/img/js.png",
      imagen2: "/assets/img/javascript2.png",
      titulo: "CURSO JAVASCRIPT",
      titulo2: "",
      descripcion: "Desarrollo web",
      descripcion2: "",
      descripcionGeneral: "",
      link:"+ más información",
      precio: 60,
      tiempo: 20
    },
    {
      id:6,
      imagen: "/assets/img/jquery.jpg",
      imagen2: "/assets/img/jquery2.png",
      titulo: "CURSO JQUERY",
      titulo2: "",
      descripcion: "Desarrollo web",
      descripcion2: "",
      descripcionGeneral: "",
      link:"+ más información",
      precio: 70,
      tiempo: 116
    },
    {
      id:7,
      imagen: "/assets/img/react.png",
      imagen2: "/assets/img/react2.png  ",
      titulo: "CURSO REACT",
      titulo2: "",
      descripcion: "Desarrollo web",
      descripcion2: "",
      descripcionGeneral: "",
      link:"+ más información",
      precio: 25,
      tiempo: 45
    }
  ]
  getAllCursos(){
    return this.tiendaB;
  }
  getCurso(id:number){
    return this.tiendaB.find(item => id === item.id);
  }

  constructor() { }
}
