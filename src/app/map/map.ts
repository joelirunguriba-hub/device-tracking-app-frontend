import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.html',
  styleUrls: ['./map.css'],
})
export class Map implements AfterViewInit {
  mapMakerPic = 'map-marker.png';
  nearestDevice: string = 'Not found yet';

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    const map = L.map('map').setView([0.0236, 37.9062], 8);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: this.mapMakerPic,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -35],
    });

    const navData = history.state;
    const referenceLat = navData.latitude || 0.0236;
    const referenceLon = navData.longitude || 37.9062;

    console.log('Navigation data:', navData);

    if (navData.latitude && navData.longitude) {
      const { latitude, longitude, userName } = navData;
      this.addMarkerWithCircle(map, customIcon, latitude, longitude, userName);
      map.setView([latitude, longitude], 16);
    } else {
      const storedDevices = localStorage.getItem('trackingDevices');
      if (storedDevices) {
        const devices = JSON.parse(storedDevices);
        let nearestDevice: any = null;
        let minDistance = Infinity;
        let nearestName = '';

        devices.forEach((device: any) => {
          const latest = device.LatestLocation?.[0];
          if (latest) {
            const distance = this.getDistanceFromLatLonInMeters(
              referenceLat,
              referenceLon,
              latest.latitude,
              latest.longitude
            );
            const name = device.User.userName;

            if (distance < minDistance) {
              minDistance = distance;
              nearestDevice = latest;
              nearestName = name;
            }
            this.addMarkerWithCircle(map, customIcon, latest.latitude, latest.longitude, name);
          }
        });
        if (nearestDevice) {
          this.nearestDevice = `${nearestName} (${minDistance.toFixed(1)} m away)`;
          this.addMarkerWithCircle(
            map,
            customIcon,
            nearestDevice.latitude,
            nearestDevice.longitude,
            nearestName,
            minDistance
          );

          map.setView([nearestDevice.latitude, nearestDevice.longitude], 16);
        }
      }
    }
  }

  private addMarkerWithCircle(
    map: L.Map,
    icon: L.Icon,
    lat: number,
    lon: number,
    name: string,
    distance?: number
  ) {
    L.marker([lat, lon], { icon })
      .addTo(map)
      .bindPopup(`<b>${name || 'Device'}</b><br>Lat: ${lat}, Lon: ${lon}`);

    L.circle([lat, lon], {
      color: distance ? 'green' : 'blue',
      fillColor: distance ? '#00ff80' : '#3f8efc',
      fillOpacity: 0.3,
      radius: 100,
    }).addTo(map);

    if (distance !== undefined) {
      L.marker([lat, lon], {
        icon: L.divIcon({
          className: 'blinking-label',
          html: `
            <div class="blink-text">
              This device is within 100 meters<br>
              <b>Nearest device is ${distance.toFixed(1)} m away</b>
            </div>
          `,
          iconSize: [200, 40],
          iconAnchor: [100, -20],
        }),
      }).addTo(map);
    }
  }



  //Triangulation formula to calculate distance between the devices provided two coordinates

  private getDistanceFromLatLonInMeters(
    latitude1: number,
    lonngitude1: number,
    latitude2: number,
    lonngitude2: number
  ): number {
    //LOCI FORMULA
    const EarthRadius = 6371000;
    const distanceInLatitude = this.deg2rad(latitude2 - latitude1);
    const distanceInLon = this.deg2rad(lonngitude2 - lonngitude1);
    const a =
      Math.sin(distanceInLatitude / 2) ** 2 +
      Math.cos(this.deg2rad(latitude1)) *
        Math.cos(this.deg2rad(latitude2)) *
        Math.sin(distanceInLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EarthRadius * c;
  }

  private deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
  }
}
