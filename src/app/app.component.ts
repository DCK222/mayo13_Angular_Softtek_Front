import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SolicitudFormularioComponent } from "./solicitud-formulario/solicitud-formulario.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SolicitudFormularioComponent]
})
export class AppComponent {
  title = 'mayo13_Angular_Softtek';
}
