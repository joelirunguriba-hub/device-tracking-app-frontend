import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { User } from './Interfaces/user';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient){}

 registerUser(user: User): Observable<User>{
  console.log("Posting new user...")
<<<<<<< HEAD
return this.http.post<User>('https://tracking-app-backend-g3al.onrender.com/api/newUser', user)
=======
return this.http.post<User>('http://localhost:4000/api/newUser', user)
>>>>>>> 7151a6d6df44f67623c2c610c3957c1b6ef9a64a
 }
  
logInUser(user:User): Observable<User>{
  console.log("Logging new User")
  const payload = {
    email: user.email,
    password: user.password};
    
<<<<<<< HEAD
  return this.http.post<User>('https://tracking-app-backend-g3al.onrender.com/api/userLogIn', payload)
=======
  return this.http.post<User>('http://localhost:4000/api/userLogIn', payload)
>>>>>>> 7151a6d6df44f67623c2c610c3957c1b6ef9a64a
}

}
