import { Component } from '@angular/core';
import { CocheSolicitudService } from '../_servicio/CocheSolicitud.service';
import { CocheSolicitud } from '../_modelo/CocheSolicitud';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-listar-formulario',
  standalone: true,
  imports: [],
  templateUrl: './listar-formulario.component.html',
  styleUrl: './listar-formulario.component.css'
})
export class ListarFormularioComponent {
  solicitudes: CocheSolicitud[] = [];

  constructor(private solicitudService: CocheSolicitudService) {}

  ngOnInit() {
    this.cargarSolicitudes();
  }

  cargarSolicitudes() {
    this.solicitudService.listarSolicitudes()
      .pipe(
        switchMap(solicitudes => {
          this.solicitudes = solicitudes;
          return this.solicitudService.listarSolicitudes(); 
        })
      )
      .subscribe({
        next: () => {
          console.log('Cargado con exito');
        },
        
      });
  }

  eliminarSolicitud(id: number) {
    this.solicitudService.eliminarSolicitudPorId(id).subscribe({
      next: () => {
        alert('Solicitud eliminada con éxito');
        this.cargarSolicitudes(); 
      },
    
    });
    location.reload();
  }

}
