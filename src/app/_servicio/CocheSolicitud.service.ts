import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CocheSolicitud } from "../_modelo/CocheSolicitud";

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

}