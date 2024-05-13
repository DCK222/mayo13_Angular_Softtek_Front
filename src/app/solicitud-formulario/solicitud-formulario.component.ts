import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CocheSolicitudService } from '../_servicio/CocheSolicitud.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
export class SolicitudFormularioComponent implements OnInit {
  form!: FormGroup; 

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute, 
    private router: Router, 
    private servicio: CocheSolicitudService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      marca: ['', Validators.required],
      modelo: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

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
    location.reload();
  }
}
