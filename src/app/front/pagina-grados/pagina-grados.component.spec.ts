import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaGradosComponent } from './pagina-grados.component';

describe('PaginaGradosComponent', () => {
  let component: PaginaGradosComponent;
  let fixture: ComponentFixture<PaginaGradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaGradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaGradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
