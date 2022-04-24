export class Item{
    id_producto:number
    nombre_product:string
    cantidad_producto:number
    precio_producto:number
    precio_item:number

    constructor(id_producto:number, nombre_product:string, cantidad_producto:number, precio_producto:number){
        this.id_producto = id_producto
        this.nombre_product = nombre_product
        this.cantidad_producto = cantidad_producto
        this.precio_producto = precio_producto
        this.precio_item = cantidad_producto * precio_producto
    }

    getprecio_producto():number{
        return this.precio_producto
    }

    setprecio_item(cantidad:number){
        this.precio_item=cantidad;
    }

    getnombre_product():string{
        return this.nombre_product
    }

    getid_producto():number{
        return this.id_producto
    }

    getprecio_item():number{
        return this.precio_item
    }

    setcantidad_producto(cantidad:number){
        this.cantidad_producto=cantidad;
    }

    getcantidad_producto():number{
        return this.cantidad_producto
    }
}