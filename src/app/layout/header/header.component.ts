import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Error } from 'src/app/Modelo/Error';
import { ServiceService } from 'src/app/Service/service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  user:Usuario = new Usuario;
  parUsuario:Usuario = new Usuario;
  result:Usuario = new Usuario;
  errores?:Error[];

  constructor(private service:ServiceService, private router:Router, public modalService:NgbModal) { }

  ngOnInit(): void {
    this.user.role = localStorage.getItem("role");
    this.user.nameuser = localStorage.getItem("nameuser");
    this.user.nombre = localStorage.getItem("nombre");
  }

  /* login(parUser:Usuario){
    this.service.login(parUser).subscribe(data=>
      {
        if(data.role!=null){
        this.user = data;
          localStorage.setItem("nameuser",this.user.nameuser);
          localStorage.setItem("role",this.user.role);
          localStorage.setItem("nombre",this.user.nombre);
          if(this.user.role == "ADMIN"){
            this.router.navigate(["listar"]);
          } else {
            window.location.reload();
            this.router.navigate(["home"]);
          }
        }
        else{
          alert("Credenciales incorrectas");
        }
      }
    )
  } */

  logout(){
    localStorage.setItem("role","null");
    window.location.reload();
  }

  registrar(){
    this.router.navigate(["vistaregistros"]);
  }

  atras(){
    this.router.navigate(["listar"]);
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

}
