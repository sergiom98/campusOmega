import { Injectable } from '@angular/core';
import { Curso } from '../curso'

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  constructor() { }

  tiendaB: Curso[]= [
    {
      id:1,
      imagen: "/assets/img/angular.png",
      imagen2: "/assets/img/NoPath.png",
      titulo: "CURSO ANGULAR 10",
      titulo2: "ANGULAR 10 CURSO COMPLETO",
      descripcion: "Desarrollo web",
      descripcion2: "Aprende a desarrollar aplicaciones web con Angular 10 de forma práctica y desde 0",
      descripcionGeneral: "Aprende Angular 10 desde cero. Con este curso de Angular 10 podrás desarrollar aplicaciones web modernas de forma práctica y sin tener conocimientos previos en Angular. Aprenderás a crear aplicaciones en la última versión del framework más popular de JavaScript, respaldada por Google. De esta forma podrás mejorar la experiencia de usuario mediante aplicaciones SPA.",
      link:"+ más información",
      precio: 49.48,
      tiempo: 40
    },
    {
      id:2,
      imagen: "/assets/img/php-2.png",
      imagen2: "/assets/img/php2.png",
      titulo: "CURSO PHP 8",
      titulo2: "PHP 8 CURSO COMPLETO",
      descripcion: "Back-end",
      descripcion2: "El Curso que te enseña como hacer cualquier Aplicación o Sitio web desde 0 con PHP y MYSQL",
      descripcionGeneral: "Bienvenido a PHP y MYSQL: El Curso Completo, Practico y Desde Cero el curso en el que aprenderás paso por paso y desde lo más básico a programar cualquier Aplicación o Sitio Web de una forma práctica y sencilla. Este curso es tu oportunidad de crear sitios en uno de los lenguajes más utilizados del mundo.",
      link:"+ más información ",
      precio: 29.99,
      tiempo: 15
    },
    {
      id:3,
      imagen: "/assets/img/spring.png",
      imagen2: "/assets/img/java2.png",
      titulo: "CURSO JAVA SPRING FRAMEWORK",
      titulo2: "JAVA SPRING FRAMEWORK CURSO COMPLETO",
      descripcion: "Desarrollo web",
      descripcion2: "Aprende desde Cero hasta Experto el framework más popular de Java, Spring Framework con Spring Boot en su última versión",
      descripcionGeneral: "Este curso es una especialización del framework más popular de Java y de aplicaciones Web y Empresariales, Spring Framework con Spring Boot. Comenzaremos absolutamente desde cero, sin embargo Spring es uno de los frameworks más avanzados y abstractos de Java, por lo que si lo requieres también tendrás acceso a los cursos de Fundamentos de Java, Programación Orientada a Objetos, JDBC con JDBC, Servlets y JSP's, y Hibernate incluyendo todo esto utilizando Maven, Log4j2, patrones de diseño, mejores prácticas, arquitecturas empresariales multicapa y mucho mucho más.",
      link:"+ más información",
      precio: 39.89,
      tiempo: 100
    },
    {
      id:4,
      imagen: "/assets/img/wordpress.png",
      imagen2: "/assets/img/wordpress2.png",
      titulo: "CURSO WORDPRESS",
      titulo2: "WORDPRESS CURSO COMPLETO",
      descripcion: "Desarrollo web",
      descripcion2: "WordPress, Sin saber Programar! Aprende Todo Sobre WordPress y Crea Sitios Web Profesionales.",
      descripcionGeneral: "El objetivo de este curso es ayudarte y mostrarte paso a paso como crear una Página Web profesional estupendo para usted o su negocio utilizando WordPress. Y no es necesario saber nada de programación.",
      link:"+ más información",
      precio: 24.99,
      tiempo: 45
    },
    {
      id:5,
      imagen: "/assets/img/js.png",
      imagen2: "/assets/img/javascript2.png",
      titulo: "CURSO JAVASCRIPT",
      titulo2: "JAVASCRIPT CURSO COMPLETO",
      descripcion: "Desarrollo web",
      descripcion2: "En este poderoso lenguaje de programación web cada día más utilizado",
      descripcionGeneral: "Este curso te hará comprender profundamente esta tecnología de programación, brindándote la base sólida que necesitas para entrar con paso firme a cualquier herramienta basada en JavaScript.",
      link:"+ más información",
      precio: 49.99,
      tiempo: 20
    },
    {
      id:6,
      imagen: "/assets/img/jquery.jpg",
      imagen2: "/assets/img/jquery2.png",
      titulo: "CURSO JQUERY",
      titulo2: "JQUERY CURSO COMPLETO",
      descripcion: "Desarrollo web",
      descripcion2: "Este curso te permitira desarrollar grandes cosas en jQuery y ayudarte en tus proyectos web de alta exigencia.",
      descripcionGeneral: "El contenido del curso es robusto, y no sólo se enfoca en lo básico, vamos de la mano desde crear un pequeño evento, hasta crear cosas como plugins, slideshows, notificaciones, consumos de apis externas y mucho más!",
      link:"+ más información",
      precio: 69.99,
      tiempo: 116
    },
    {
      id:7,
      imagen: "/assets/img/react.png",
      imagen2: "/assets/img/react2.png  ",
      titulo: "CURSO REACT",
      titulo2: "REACT CURSO COMPLETO",
      descripcion: "Desarrollo web",
      descripcion2: "Context API, MERN, Hooks, Firestore, JWT, Testing, Autenticaciones, Despliegues, CRUD, Logs, SASS, Multiple Routers...",
      descripcionGeneral: "Este curso tiene por objetivo llevarte de cero conocimiento de React hasta un nivel competitivo en el ambiente laboral de hoy en día. Este curso está construido 100% en Hooks y functional components.",
      link:"+ más información",
      precio: 24.89,
      tiempo: 45
    }
  ]

  getAllCursos() {
    return this.tiendaB;
  }

  getCurso(id:number) {
    return this.tiendaB.find(item => id === item.id);
  }


}
