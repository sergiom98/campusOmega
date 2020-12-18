import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaPrincipalComponent } from './front/pagina-principal/pagina-principal.component';
import { PaginaCursosComponent } from './front/pagina-cursos/pagina-cursos.component';
import { ContactFotterComponent } from './contact-fotter/contact-fotter.component';

const routes: Routes = [
  {path: '', component: PaginaPrincipalComponent},
  // {path: 'inicio', component: PaginaPrincipalComponent},
  {path: 'cursos', component: PaginaCursosComponent},
  {path: 'contacto', component: ContactFotterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
