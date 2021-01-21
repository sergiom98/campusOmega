import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFotterComponent } from './contact-fotter.component';

describe('ContactFotterComponent', () => {
  let component: ContactFotterComponent;
  let fixture: ComponentFixture<ContactFotterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFotterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
