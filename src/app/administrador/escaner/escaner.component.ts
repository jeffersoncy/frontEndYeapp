import {Component, ViewChild, ViewEncapsulation, OnInit} from '@angular/core';
import {QrScannerComponent} from 'angular2-qrscanner';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-escaner',
  templateUrl: './escaner.component.html',
  styleUrls: ['./escaner.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EscanerComponent implements OnInit {
  @ViewChild(QrScannerComponent, { static: false}) qrScannerComponent: QrScannerComponent ;

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
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
      console.log(result);
      this.service.getProductByID(Number(result)).subscribe(res=>{
        console.log(res.nomProducto)
        console.log(res.estado)
        console.log(res.tipo)
      })
  });
  }

}
