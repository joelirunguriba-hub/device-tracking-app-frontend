import { Component, OnInit } from '@angular/core';
import { MainService } from '../main-service';
import { User } from './../interfaces/user';
import {CommonModule} from '@angular/common';
import Cropper from 'cropperjs';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devices',
  imports: [CommonModule, MatIconModule],

templateUrl: './devices.html',
  styleUrl: './devices.css'
})
export class Devices implements OnInit {

  trackingDevices: any[] = []; 
  userName: string = '';
  location: string = '';

constructor(private mainService: MainService, private router: Router){}


ngOnInit():void{
this.getAllDevices();


}


  getAllDevices(): void {
    const storedDevices = localStorage.getItem('trackingDevices');
    if (storedDevices) {
      this.trackingDevices = JSON.parse(storedDevices);
      console.log('All saved devices:', this.trackingDevices);
      
    } else {
      this.trackingDevices = [];
      console.log('No saved devices found in localStorage.');
    }
  
}
  
goToLocation(device?: any): void {
  console.log('Navigating to map view...');
  const storedDevices = localStorage.getItem('trackingDevices');

  if (storedDevices) {
    this.trackingDevices = JSON.parse(storedDevices);
    console.log('All saved devices:', this.trackingDevices);

    if (device && device.LatestLocation && device.LatestLocation.length > 0) {
      const latest = device.LatestLocation[0];
      this.router.navigate(['/map'], {
        state: {
          latitude: latest.latitude,
          longitude: latest.longitude,
          userName: device.User.userName
        }
      });
    } else {
      this.router.navigate(['/map']);
    }

  } else {
    console.log('No saved devices found in localStorage.');
  }
}


}
