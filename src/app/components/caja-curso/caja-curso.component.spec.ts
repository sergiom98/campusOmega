import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaCursoComponent } from './caja-curso.component';

describe('CajaCursoComponent', () => {
  let component: CajaCursoComponent;
  let fixture: ComponentFixture<CajaCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajaCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CajaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
