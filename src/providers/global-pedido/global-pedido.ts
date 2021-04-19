import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalPedidoProvider {

  private pedido: GlobalPedidoProvider; 
    Id: string;
    IdProductoInteres: string;
    IdUsuarioSolicita: string;
    IdPedido_Estado: string;
    FechaPedido: string;
    FechaEntrega: string;
    Comentarios: string;
    Importe: number; 
    FueCalificado: boolean;   
    IdUsuarioRecibe: string;
    TipoMatch: string;
    
    getPedido(): GlobalPedidoProvider {
      return this.pedido;
    }
  
    setPedido(pedido:GlobalPedidoProvider) {
      this.pedido = pedido;
    }

}
