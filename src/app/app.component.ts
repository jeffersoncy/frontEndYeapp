import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'GetProducts';

  constructor(private router:Router){}
  ngOnInit(): void {
    let user = localStorage.getItem("role");
    if(user == "ADMIN") {
      this.AdminProd();
    } else {
      this.Home();
    }     
  }

  // vistas cliente 

  Home(){
    this.router.navigate(["home"]);
  }

  ofertas(){
    this.router.navigate(["vistaofertas"]);
  }

  //vistas administrador 
  
  AdminProd(){
    this.router.navigate(["listar"]);
  }

  ListarOfer(){
    this.router.navigate(["listarofer"]);
  }

}
