import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';
import { Error } from 'src/app/Modelo/Error';
import { ServiceService } from 'src/app/Service/service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  tipos;
  public previsualizacion:string;
  public ruta:string;
  producto: Producto = new Producto;
  errores: Error[];
  bandera: boolean = false;
  prodTipo : string;
  public archivo: any = []
  indice : number;
  constructor(private service: ServiceService, private router: Router, private sanitizer: DomSanitizer) {
    this.tipos = ["Frutas y verduras","Pollo, Carne y Pescados","Huevos y derivados lacteos","Despensa"]
   }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos() {
    let id = localStorage.getItem("idProducto");
    this.service.getProductByID(+id).subscribe(data => {
      this.producto = data;
      this.prodTipo = data.tipo;
      this.previsualizacion = "../../../../assets/Productos/" + data.rutaimagen;
      for (let index = 0; index < this.tipos.length; index++) {
        if (this.tipos[index] == data.tipo) {
          this.indice = index;
        }
      }
    })
  }

  actualizarProducto(producto: Producto) {
    this.service.editProducto(producto).subscribe(data => {
      try {
        this.producto = data;
        alert("Producto actualizado de forma correcta");
        this.router.navigate(["listar"]);
        this.bandera = true;
      } catch (error) {
        alert("Error al actualizar: " + error);
      }
    },
      response => {
        if (this.bandera == false) {
          this.errores = response.error.errors;
        }
      }
    )
  }

  capturarFile(event):any{
    alert("Imagen actualizada correctamente");
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen:any) => {
      this.previsualizacion = imagen.base;
    })
    this.archivo.push(archivoCapturado);
    this.producto.rutaimagen = this.producto.rutaimagen.slice(12);
  }

  atras() {
    this.router.navigate(["listar"]);
  }

  mensajeError(formato: String): String {
    if (this.errores == undefined) {
      return "";
    }
    for (let error of this.errores) {
      if (error.field == formato) {
        return error.mensaje;
      }
    }
    return "";
  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve ({
          base:reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };
    } catch (e) {
      return null;
    }
  })

}
