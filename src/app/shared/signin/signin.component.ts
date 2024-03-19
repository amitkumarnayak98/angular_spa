import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app_spa-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  showPassword: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  toggleVisibility() {
    this.showPassword = !this.showPassword;
  }
}
