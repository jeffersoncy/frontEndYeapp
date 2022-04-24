import {Component, ViewChild, ViewEncapsulation, OnInit} from '@angular/core';
import {QrScannerComponent} from 'angular2-qrscanner';
import { ServiceService } from 'src/app/Service/service.service';
import { Producto } from 'src/app/Modelo/Producto';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-escaner',
  templateUrl: './escaner.component.html',
  styleUrls: ['./escaner.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EscanerComponent implements OnInit {

  @ViewChild(QrScannerComponent, { static: false}) qrScannerComponent: QrScannerComponent;

  public producto: Producto = new Producto;
  public bandera: String = "false"
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    this.iniciarCamara();
  }

  reload(){
      this.iniciarCamara();
  }

  iniciarCamara(){
    this.qrScannerComponent.getMediaDevices().then(devices => {
        console.log(devices);
        const videoDevices: MediaDeviceInfo[] = [];
        for (const device of devices) {
            if (device.kind.toString() === 'videoinput') {
                videoDevices.push(device);
            }
        }
        if (videoDevices.length > 0){
            let choosenDev;
            for (const dev of videoDevices){
                if (dev.label.includes('front')){
                    choosenDev = dev;
                    break;
                }
            }
            if (choosenDev) {
                this.qrScannerComponent.chooseCamera.next(choosenDev);
            } else {
                this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
            }
        }
    });
  
    this.qrScannerComponent.capturedQr.subscribe(result => {
        this.bandera = "True"
        console.log(result);
        this.service.getProductByID(Number(result)).subscribe(res=>{
            this.producto = res;
        })
    });
  }

}
