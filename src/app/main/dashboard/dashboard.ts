import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MainService } from './../main-service';
import { LocationService } from './../../map/location-service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
<<<<<<< HEAD
  templateUrl: './dashboard.html',
=======
templateUrl: './dashboard.html',
>>>>>>> 7151a6d6df44f67623c2c610c3957c1b6ef9a64a
  styleUrls: ['./dashboard.css'],
})
export class Dashboard implements OnInit {
  uploadPic = '/camera.png';
  name: any[] = [];
  model: any[] = [];
  devices: any[] = [];
<<<<<<< HEAD

  imageSrc: string | null = null;

  constructor(
    private router: Router,
    private mainService: MainService,
    private locationService: LocationService
  ) {}
  ngOnInit() {
    this.getAllDevices();
    this.locationService.watchLocationOnInit('');
=======
  imageSrc: string | null = null;

  constructor(private router: Router, private mainService: MainService, private locationService: LocationService) {}
  ngOnInit() {
    this.getAllDevices();
    this.locationService.watchLocationOnInit('');

>>>>>>> 7151a6d6df44f67623c2c610c3957c1b6ef9a64a
  }
  goToMap() {
    this.router.navigate(['/map']);
  }
<<<<<<< HEAD
=======

>>>>>>> 7151a6d6df44f67623c2c610c3957c1b6ef9a64a
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      this.imageSrc = reader.result as string;
      localStorage.setItem('profilePic', this.imageSrc);
<<<<<<< HEAD

=======
>>>>>>> 7151a6d6df44f67623c2c610c3957c1b6ef9a64a
    };
    reader.readAsDataURL(file);
  }
  getAllDevices() {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      console.error('User ID not found in localStorage');
      return;
    }
    this.mainService.getUserById(userId).subscribe({
      next: (data: any) => {
        console.log('API RESPONSE:', data);

        if (!data.user || !data.user.deviceInfo) {
          console.error('Invalid response: deviceInfo missing');
          return;
        }
        this.devices = data.user.deviceInfo.map((device: any) => {
          this.name.push(device.name || 'Unknown Device');
          this.model.push(device.model || 'Unknown Model');

          return {
            name: device.model || device.name || 'Unknown Device',
            model: device.model || 'Unknown Model',
          };
<<<<<<< HEAD
=======
          
>>>>>>> 7151a6d6df44f67623c2c610c3957c1b6ef9a64a
        });
      },
      error: (err: any) => console.error('Error fetching devices:', err),
    });
  }
<<<<<<< HEAD
=======
 
>>>>>>> 7151a6d6df44f67623c2c610c3957c1b6ef9a64a
}
