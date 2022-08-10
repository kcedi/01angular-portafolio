import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.service';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any;

  constructor( private http: HttpClient ) { 
    
    
    this.cargarInfo();
    this.cargarEquipo();


   }

   private cargarInfo() {
    // Leer archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {

        this.cargada = true;
        this.info = resp;

        // console.log(resp);

    });

   }


   private cargarEquipo() {
    // Leer archivo JSON
    this.http.get('https://angular-html-82bab-default-rtdb.firebaseio.com/equipo.json')
      .subscribe( (resp: any) => {

        this.equipo = resp;

        // console.log(resp);

    });
   }

}
