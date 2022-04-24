import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { Pedido } from 'src/app/Modelo/Pedido';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public elementType = NgxQrcodeElementTypes.URL;
  public correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  public value = "1000";


  productos!: Producto[];
  productosfiltrado!: Producto[];
  cantidad: number = 1;
  carrito: Pedido;
  categoria: string;
  constructor(private service: ServiceService, private router: Router) {
    this.productosfiltrado = [ ];
  }

  ngOnInit(): void {
    this.listarProductos();
    this.categoria="general";
  }

  listarProductos() {
    this.service.getProductos()
      .subscribe(data => {
        this.productos = data;
      })
  }

  disminuirInput(input) {
    if (input.value > 1) {
      input.value--;
      this.cantidad--;
    }
  }

  aumentarInput(input) {
    input.value++;
    this.cantidad++;
  }

  actualizarPrecio(input) {
    if (input.value < 1) {
      input.value = 1;
      this.cantidad = 1;
    } else this.cantidad = +input.value;
  }


  tipo(productos:Producto[],tipo: string) {
    this.productosfiltrado = [];
    if (tipo != "general") {
      this.categoria = tipo;
      for (let index = 0; index < this.productos.length; index++) {
        if (this.productos[index].tipo == tipo) {
          this.productosfiltrado.push(this.productos[index])
        }
      }
      productos = this.productosfiltrado;
    } else {
      this.categoria = "general"
    }
  }

}
