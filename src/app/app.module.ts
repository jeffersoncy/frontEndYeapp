import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './cliente/home/home.component';
import { ContactanosComponent } from './cliente/contactanos/contactanos.component';
import { RegistroComponent } from './cliente/registro/registro.component';
import { AgregarComponent } from './administrador/Producto/agregar/agregar.component';
import { EditarComponent } from './administrador/Producto/editar/editar.component';
import { ListarComponent } from './administrador/Producto/listar/listar.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from './Service/service.service';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { EscanerComponent } from './administrador/escaner/escaner.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactanosComponent,
    RegistroComponent,
    AgregarComponent,
    EditarComponent,
    ListarComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    EscanerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    NgQrScannerModule,
    NgxQRCodeModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
