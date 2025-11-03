import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

  constructor(private router: Router) {}

  goToAuth() {
    this.router.navigate(['/auth']);
    console.log('Home button clicked');
  }

}
