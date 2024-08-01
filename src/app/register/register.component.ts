import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
constructor (private auth:AuthService,private router:Router) {}

 register(){
  //Logic to check whether everything is entered or not
  this.router.navigate(['feed'])
 }
}
