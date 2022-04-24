export class Producto{
    id:number;
    nomProducto: string;
    rutaimagen: string;
    tipo: string;
    estado:string;

    compareTo(producto:Producto) : boolean{
        if(producto.nomProducto == this.nomProducto && producto.rutaimagen == this.rutaimagen && producto.tipo == this.tipo && producto.estado == this.estado){
            return true;
        }
        return false;
    }

    getnom_producto():string{
        return this.nomProducto;
    }

    getid_producto():number{
        return this.id
    }

    getestado():string{
      return this.estado;
    }

    getrutaimagen():string{
      return this.rutaimagen;
    }

    setnombre_producto(nombre:string){
        this.nomProducto=nombre;
    }

    setestado(estado:string){
      this.estado=estado;
  }

}
