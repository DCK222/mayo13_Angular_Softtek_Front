import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudFormularioComponent } from './solicitud-formulario.component';

describe('SolicitudFormularioComponent', () => {
  let component: SolicitudFormularioComponent;
  let fixture: ComponentFixture<SolicitudFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudFormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitudFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
