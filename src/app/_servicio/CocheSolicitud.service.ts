import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CocheSolicitud } from "../_modelo/CocheSolicitud";
import { Observable } from "rxjs";

@Injectable({
    providedIn :'root'
})

export class CocheSolicitudService{
    private puerto = 'http://localhost:8080/cocheSolicitud'

    constructor(private http : HttpClient){

    }

    solicitud(cocheSolicitud : CocheSolicitud){
        return this.http.post<CocheSolicitud>(this.puerto, cocheSolicitud);
    }
    
     listarSolicitudes(): Observable<CocheSolicitud[]> {
        return this.http.get<CocheSolicitud[]>(this.puerto);
    }

    
    eliminarSolicitudPorId(id: number): Observable<any> {
        return this.http.delete(`${this.puerto}/${id}`);
    }

}