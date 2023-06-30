import { Component } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-Settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage {

  serverIp: string = "";

  constructor(private socketService: SocketService) {
    const socketServerIp = localStorage.getItem('socketServerIP');
    if(socketServerIp) {
      this.serverIp = socketServerIp;
    }
  }

  connectToServer = () => {
    this.socketService.connect(this.serverIp);
  }

  isConnected = () => {
    return this.socketService.isConnected();
  }

  isLoading = () => {
    return this.socketService.isLoading();
  }

}
