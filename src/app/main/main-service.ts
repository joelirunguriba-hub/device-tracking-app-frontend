import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import { User } from './interfaces/user';
import { DeviceInfo } from './interfaces/device';
import { NewDevice } from './interfaces/newDevice';
import { Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class MainService {
<<<<<<< HEAD
  private globalUrl='https://tracking-app-backend-g3al.onrender.com/api/getUser';
=======
  private globalUrl='http://localhost:4000/api/getUser';
>>>>>>> 7151a6d6df44f67623c2c610c3957c1b6ef9a64a
  
  constructor(private http: HttpClient){}


<<<<<<< HEAD
  addNewDevice(device: NewDevice, userId: string): Observable<NewDevice> {
    console.log("Adding new device:", device);
  
    const addDeviceUrl = `https://tracking-app-backend-g3al.onrender.com/api/devices/registerMyDevice/${userId}`;
=======

  addNewDevice(device: NewDevice, userId: string): Observable<NewDevice> {
    console.log("Adding new device:", device);
  
    const addDeviceUrl = `http://localhost:4000/api/devices/registerMyDevice/${userId}`;
>>>>>>> 7151a6d6df44f67623c2c610c3957c1b6ef9a64a
    return this.http.post<NewDevice>(addDeviceUrl, device);
  }
  
  getUserById(_id: string): Observable<User> {
    const getUserByIdUrl= `${this.globalUrl}/${_id}`;
    return this.http.get<User>(getUserByIdUrl)
   }

getUserDataByPin(pin: string): Observable<User> {
<<<<<<< HEAD
  const getUserByPinUrl = `https://tracking-app-backend-g3al.onrender.com/api/getUserByPin/${pin}`;
=======
  const getUserByPinUrl = `http://localhost:4000/api/getUserByPin/${pin}`;
>>>>>>> 7151a6d6df44f67623c2c610c3957c1b6ef9a64a
  return this.http.get<User>(getUserByPinUrl);
}

editDeviceById(deviceId: string, updatedDevice: NewDevice): Observable<NewDevice> {
<<<<<<< HEAD
  const editDeviceUrl = `https://tracking-app-backend-g3al.onrender.com/api/devices/editDevice/${deviceId}`;
=======
  const editDeviceUrl = `http://localhost:4000/api/devices/editDevice/${deviceId}`;
>>>>>>> 7151a6d6df44f67623c2c610c3957c1b6ef9a64a
  return this.http.put<NewDevice>(editDeviceUrl, updatedDevice);
}
}