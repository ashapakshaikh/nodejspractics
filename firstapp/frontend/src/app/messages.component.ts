import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'messages',
  template: `
  <div *ngFor="let message of apiService.messages">
      <mat-card>{{message.message}}</mat-card>
  </div> `
  
})
export class MessagesComponent {

  constructor( private apiService: ApiService){ }

  ngOnInit() {

      this.apiService.getMessages();
  }
}
