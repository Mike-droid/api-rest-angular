import { Component } from '@angular/core';
import { UsersService } from './services/users.service';

import { FilesService } from './services/files.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg = true;
  token = '';

  constructor(
    private usersService: UsersService,
    private filesService: FilesService
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

  downloadPdf() {
    this.filesService.getFile(
      'my_file.pdf',
      'https://young-sands-07814.herokuapp.com/api/files/dummy.pdf',
      'application/pdf'
    ).subscribe()
  }
}
