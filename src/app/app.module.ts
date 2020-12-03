import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './front/pagina-principal/pagina-principal.component';
import { PaginaCursosComponent } from './front/pagina-cursos/pagina-cursos.component';
import { PaginaGradosComponent } from './front/pagina-grados/pagina-grados.component';
import { ContactFotterComponent } from './contact-fotter/contact-fotter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    PaginaCursosComponent,
    PaginaGradosComponent,
    ContactFotterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
