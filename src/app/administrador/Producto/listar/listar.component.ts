import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceService } from '../../../Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  productos!:Producto[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getProductos()
    .subscribe(data=>{
      this.productos=data;
    })
  }
  agregarProducto(){
    this.router.navigate(["agregar"]);
  }

  actualizarProducto(producto:Producto){
    localStorage.setItem("idProducto",producto.id.toString());
    this.router.navigate(["editar"]);
  }

  eliminarProducto(producto:Producto){
    this.service.deleteProducto(producto).subscribe(data =>{
      this.productos = this.productos.filter(p=>p!==producto);
    })
  }

}
