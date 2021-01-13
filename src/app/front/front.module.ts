import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DawComponent } from '../daw/daw.component';
import { DamComponent } from '../dam/dam.component';
import { ContactFotterComponent } from '../contact-fotter/contact-fotter.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [DawComponent, DamComponent, ContactFotterComponent, NavbarComponent],
  imports: [
    CommonModule,
    NgbModule
  ]
})

export class FrontModule { }
