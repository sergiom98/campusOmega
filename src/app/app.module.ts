import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './front/pagina-principal/pagina-principal.component';
import { PaginaCursosComponent } from './front/pagina-cursos/pagina-cursos.component';
import { ContactFotterComponent } from './contact-fotter/contact-fotter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CajaCursoComponent } from './caja-curso/caja-curso.component';
import { DawComponent } from './daw/daw.component';
import { DamComponent } from './dam/dam.component';
import { CursoDetalleComponent } from './curso-detalle/curso-detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    PaginaCursosComponent,
    ContactFotterComponent,
    NavbarComponent,
    CajaCursoComponent,
    DawComponent,
    DamComponent,
    CursoDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
