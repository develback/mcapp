import { HttpClientModule, HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalProvider } from "../../providers/global/global";
import { GlobalPedidoProvider } from '../../providers/global-pedido/global-pedido';

@Injectable()
export class PedidosServiceProvider {

  
  
  constructor(public http: HttpClient, public global:GlobalProvider, private pedido:GlobalPedidoProvider) {
    
  }
  getPedidosById(idPedido){
    return this.http.get(this.global.ApiUrl+'Pedidos/'+idPedido);
  }

  getPedidosRecibidosByUser(idUsuario:string){
    return this.http.get(this.global.ApiUrl+'Pedidos/CanjesRecibidosByUsuario/'+idUsuario);
  }
  getPedidosConfirmadosByUser(idUsuario:string){
    return this.http.get(this.global.ApiUrl+'Pedidos/CanjesConfirmadosByUsuario/'+idUsuario);
  }

  postPedido(pedido:GlobalPedidoProvider){
    pedido.Id="0";
    console.log(pedido);



    //return this.http.post(this.global.ApiUrl+'Pedidos/', pedido);
    return this.http.post(this.global.ApiPostUrl+'Pedidos/', pedido);

    
  }
  putPedido(pedido:GlobalPedidoProvider){
    //pedido.Id="0";
    console.log(pedido);
    //return this.http.put(this.global.ApiUrl+'Pedidos/'+pedido.Id, pedido);
    return this.http.put(this.global.ApiPostUrl+'Pedidos/'+pedido.Id, pedido);
  }
  UpdatePedidoState(pedido:GlobalPedidoProvider){
    console.log(pedido);
    //return this.http.post(this.global.ApiUrl+'Pedidos/UpdatePedidoState/', pedido);
    return this.http.post(this.global.ApiPostUrl+'Pedidos/UpdatePedidoState/', pedido);
  }

}
