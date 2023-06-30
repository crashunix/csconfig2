import { Component } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

enum CrosshairDimension {
  Gap = 'gap',
  Size = 'size',
  Scale = 'scale',
  Thickness = 'thickness',
  T = 't'
}

@Component({
  selector: 'app-crosshair',
  templateUrl: 'crosshair.page.html',
  styleUrls: ['crosshair.page.scss']
})
export class CrosshairPage {

  currentCrosshairGap: number = 0;
  currentCrosshairSize: number = 0;
  currentCrosshairScale: number = 0;
  currentCrosshairThickness: number = 0;
  currentCrosshairT: number = 0;

  constructor(private socketService: SocketService) { }

  setCrosshair(dimension: string, value: number) {
    switch (dimension) {
      case 'gap':
        this.currentCrosshairGap = this.currentCrosshairGap + (1 * value);
        this.socketService.command(`cl_crosshairgap ${this.currentCrosshairGap}`);
        break;
      case 'size':
        this.currentCrosshairSize = this.currentCrosshairSize + (1 * value);
        this.socketService.command(`cl_crosshairsize ${this.currentCrosshairSize}`);
        break;
      case 'scale':
        this.currentCrosshairScale = this.currentCrosshairScale + (1 * value);
        this.socketService.command(`cl_crosshairscale ${this.currentCrosshairScale}`);
        break;
      case 'thickness':
        this.currentCrosshairThickness = this.currentCrosshairThickness + (1 * value);
        this.socketService.command(`cl_crosshairthickness ${this.currentCrosshairThickness}`);
        break;
      case 't':
        this.currentCrosshairT = this.currentCrosshairT + (1 * value);
        this.socketService.command(`cl_crosshair_t ${this.currentCrosshairT}`);
        break;
    }
  }

  crosshairSize(value: number) {
    this.currentCrosshairSize = this.currentCrosshairSize + (1 * value);
    this.socketService.command(`cl_crosshairsize ${this.currentCrosshairSize}`);
  }

}
