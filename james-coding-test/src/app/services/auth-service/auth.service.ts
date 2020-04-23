import { Injectable } from '@angular/core';
import { User } from '../../models/user';
// Here you would import the below lines of code to make your api calls to authenticate the user

// import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private http: HttpClient - would be included in the constructor if we were going to make api calls
  constructor() { }


  // The cool thing about sessionStorage it retains the data even if user reloads the screen.
  // It clears itself if user quits the page or web browser
  setUser(userObj) {
    sessionStorage.setItem('currentUser', JSON.stringify(userObj));
    console.log('Auth-Service | user.name: ', userObj.name);
  }

  getUser() {
    return JSON.parse(sessionStorage.getItem('currentUser'));
  }

  clearUser() {
    sessionStorage.removeItem('currentUser');
  }

  isUserSignedIn() {
    const result = this.getUser();
    if (result !== null) {
      return true;
    } else {
      return false;
    }
  }

}
