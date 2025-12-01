import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet,  HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {

 
}
