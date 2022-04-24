import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Modelo/Producto';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  Url='http://localhost:8002/productos';

  //CRUD Productos

  getProductos(){
    return this.http.get<Producto[]>(this.Url);
  }

  newProducto(producto:Producto){
    return this.http.post<Producto>(this.Url,producto);
  }

  editProducto(producto:Producto){
    return this.http.put<Producto>(this.Url+"/"+producto.id,producto);
  }

  deleteProducto(producto:Producto){
    return this.http.delete<Producto>(this.Url+"/"+producto.id);
  }

  getProductByID(id:Number){
    return this.http.get<Producto>(this.Url+"/"+id);
  }

}
