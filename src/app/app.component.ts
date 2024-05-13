import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SolicitudFormularioComponent } from "./solicitud-formulario/solicitud-formulario.component";
import { ListarFormularioComponent } from "./listar-formulario/listar-formulario.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SolicitudFormularioComponent, ListarFormularioComponent]
})
export class AppComponent {
  title = 'mayo13_Angular_Softtek';
}
