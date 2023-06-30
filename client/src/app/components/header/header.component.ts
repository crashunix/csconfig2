import { Component, Input, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Input('title') title: string = "Title";

  constructor(private socketService: SocketService) { }

  ngOnInit() {}

  isConnected = () => {
    return this.socketService.isConnected();
  }

  isLoading = () => {
    return this.socketService.isLoading();
  }

}
