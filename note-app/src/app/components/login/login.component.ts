import { Component, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login.component',
  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = signal('');
  password = signal('');
  error = signal('');

  constructor(private router: Router) {}

  login() {
    if(this.username() === 'admin' && this.password() === 'admin') {
      this.router.navigate(['/note-editor']);
    }
    else {
      this.error.set('Invalid email or password!');
    }
  }
}
