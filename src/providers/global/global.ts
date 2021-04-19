import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class GlobalProvider {

  //public ApiUrl = 'https://cors-anywhere.herokuapp.com/http://wi200484.ferozo.com/api/';
  //public ApiUrl = 'https://cors-anywhere.herokuapp.com/https://mundocanjeapp.tk/api/';
  public ApiUrl = "https://mundocanjeapp.tk/api/";  //Android

  public ApiPostUrl = 'https://cors-anywhere.herokuapp.com/http://wi200484.ferozo.com/api/';
  

  private user: GlobalProvider; 
    Id: string;
    Mail: string;
    Sexo: string;
    password: string;
    Nombre: string;
    Telefono: string;
    Whatsapp: string;
    Token: string;
    Direccion: string;
    Razon_Social: string;
    Estado: string;
    IdTipo: string;
    Cuit: string;
    Imagen: string;
    IdPlan: string;
    IdLocalidad: string;
    Fecha_Alta: string;
    RubroUsuario: string;

    getUser(): GlobalProvider {
      return this.user;
    }
  
    setUser(user:GlobalProvider) {
      this.user = user;
    }
  }

