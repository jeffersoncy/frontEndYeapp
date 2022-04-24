export class Usuario{
    id:number;
    nombre: string;
    apellidos: string;
    nameuser: string;
    clave: string;
    role: string;

    compareTo(usuario:Usuario) : boolean{
        if(usuario.nombre == this.nombre && usuario.apellidos == this.apellidos && usuario.nameuser == this.nameuser && usuario.clave == this.clave && usuario.role == this.role){
            return true;
        }
        return false;
    }
}