import { Component, OnInit } from '@angular/core';
import { MainService } from '../main-service';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css'
})
export class Notifications implements OnInit{
  constructor(mainService: MainService) {}

  notifications: any[] = [];

  ngOnInit(): void {
 
  }

  newNotification(notification: any): void {
    this.notifications.push(notification);
    

  }
}
