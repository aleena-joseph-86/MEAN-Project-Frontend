import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private auth: AuthService,private router:Router) {}

  user() {
    this.router.navigate(['login']);
  }

  administrator(){
    // Can you give more input on this so that i will make the necessary components for it
  }

}
