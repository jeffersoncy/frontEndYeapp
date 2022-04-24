import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';
import { Error } from 'src/app/Modelo/Error';
import { ServiceService } from 'src/app/Service/service.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  tipos;
  opcionSeleccionado: string;
  verSeleccion: string;
  cantidad:number;
  public previsualizacion:string;
  public ruta:string;
  producto:Producto = new Producto;
  public archivo: any;
  errores?:Error[];
  constructor(private service:ServiceService, private router:Router, private sanitizer: DomSanitizer) {
    this.tipos = ["Frutas y verduras","Pollo, Carne y Pescados","Huevos y derivados lacteos","Despensa"]
    this.opcionSeleccionado = '0';
    this.verSeleccion = '';
    this.archivo = [];
    this.previsualizacion = '';
  }


  ngOnInit(): void {
  }

  guardar(){
    this.service.newProducto(this.producto).subscribe(data=>
      {
      if (this.producto.compareTo(data)) {
        this.producto = data;
        alert("Producto añadido correctamente");
        this.router.navigate(["listar"]);
      }else{
        alert("Error al añadir el producto");
        this.router.navigate(["listar"]);
      }
    });
  }

  atras(){
    this.router.navigate(["listar"]);
  }

  capturarFile(event):any{
    alert("Imagen previsualizada");
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen:any) => {
      this.previsualizacion = imagen.base;
    })
    this.archivo.push(archivoCapturado);
    this.producto.rutaimagen = this.producto.rutaimagen.slice(12);
  }

  mensajeError(formato:String): String{
    if(this.errores == undefined){
      return "";
    }
    for(let error of this.errores){
      if(error.field == formato){
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
