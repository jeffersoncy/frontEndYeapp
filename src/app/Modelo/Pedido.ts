export class Pedido{
    nomproducto:string;
    precio:number;
    cantidad:number;
    valortotal:number;
    rutaimg:string
    
    constructor(nomproducto:string, precio:number, cantidad:number, rutaimg:string){
        this.nomproducto=nomproducto;
        this.precio=precio;
        this.cantidad=cantidad;
        this.rutaimg=rutaimg;
    }
}