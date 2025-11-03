import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import { User } from './interfaces/user';
import { Device } from './interfaces/device';
import { NewDevice } from './interfaces/newDevice';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private globalUrl='http://localhost:4000/api/getUser';
  
  constructor(private http: HttpClient){}

  getUserById(_id: string): Observable<User> {
   const getUserByIdUrl= `${this.globalUrl}/${_id}`;
   return this.http.get<User>(getUserByIdUrl)
  }

  
addNewDevice(device:NewDevice): Observable<NewDevice> {
  console.log("Adding new device:", device);

  const addDeviceUrl = 'http://localhost:4000/api/devices/registerMyDevice';
  return this.http.post<NewDevice>(addDeviceUrl, device);
}

getUserDataByPin(pin: string): Observable<User> {
  const getUserByPinUrl = `http://localhost:4000/api/getUserByPin/${pin}`;
  return this.http.get<User>(getUserByPinUrl);
}
}