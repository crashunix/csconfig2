import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket | null = null;
  private connectionAttempts: number = 0;

  private socketServerIP: string | null;

  private isSocketLoading: boolean = false;

  constructor(private alertController: AlertController) {
    this.socketServerIP = localStorage.getItem('socketServerIP');
    if(this.socketServerIP) {
      this.connect(this.socketServerIP);
    }
  }

  connect = (address: string) => {
    this.socket = io(`http://${address}:443`);
    this.isSocketLoading = true;
    this.socket.on('connect', () => {
      this.isSocketLoading = false;
      console.log('Connected to server');
      if(address !== this.socketServerIP) {
        localStorage.setItem('socketServerIP', address);
        this.socketServerIP = address;
      } 
    });
    this.socket.on('connect_error', () => {
      this.isSocketLoading = false;
      if(this.connectionAttempts >= 2) {
        this.socket?.disconnect();
        localStorage.removeItem('socketServerIP');
        this.presentAlert("Erro", "A conexão falhou depois de 3 tentativas", "Verifique o endereço de IP e tente novamente");
        console.log('Error on connect to server');
      } else {
        this.connectionAttempts++;
      }
    });
    this.socket.on('disconnect', () => {
      this.isSocketLoading = false;
      this.presentAlert("Desconectado", "Você foi desconectado do servidor", "");
      console.log('Disconnected from server');
    });
    this.socket.on('message', (message: string) => {
      console.log('Received message:', message);
    });
  }

  sendMessage(message: string) {
    if(this.socket) {
      this.socket.emit("say", message);
    }
  }

  command(command: string) {
    if(this.socket) {
      this.socket.emit("command", command);
    }
  }

  isConnected(): boolean {
    if(this.socket) {
      return this.socket.connected;
    }
    return false;
  }

  isLoading(): boolean {
    return this.isSocketLoading;
  }

  async presentAlert(header: string, subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header,
      subHeader,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}