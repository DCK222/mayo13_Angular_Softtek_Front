import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CocheSolicitudService } from '../_servicio/CocheSolicitud.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CocheSolicitud } from '../_modelo/CocheSolicitud';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solicitud-formulario',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,FormsModule,CommonModule],
  templateUrl: './solicitud-formulario.component.html',
  styleUrl: './solicitud-formulario.component.css'
})
export class SolicitudFormularioComponent {
  form: FormGroup = new FormGroup({
    nombre: new FormControl(''),
    marca: new FormControl(''),
    modelo: new FormControl('')
  });

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private servicio: CocheSolicitudService
  ) {}

  formularioOperacion(): void {
    if (this.form.valid) {
      const solicitudCoche: CocheSolicitud = this.form.value;
      this.servicio.solicitud(solicitudCoche).subscribe({
        next: (res) => {
          alert('Solicitud correcta');
          console.log('Bien, solicitud creada');
        },
      });
    }
  }
}
