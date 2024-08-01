import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor (private auth: AuthService,private router: Router) {}

  login() {
  //  Right now i have mentioned the input fields as Required
  //  Replace it with proper error messsages as that we could remove the reuired 
  this.router.navigate(['register']);
  }

}
