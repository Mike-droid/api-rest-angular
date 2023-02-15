import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg = true;

  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {}

  toggleImg() {
    this.showImg = !this.showImg;
  }

  createUser() {
    this.usersService.create({
      email: 'angel@hotmail.com',
      password: 'angelito',
      name: 'Angel'
    })
    .subscribe(data => {
      console.log(data);
    })
  }

  login() {
    this.authService.login(
      'angel@hotmail.com',
      'angelito',
    )
    .subscribe(data => {
      console.log(data.access_token);
    })
  }
}
