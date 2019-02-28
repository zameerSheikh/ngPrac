import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg: string = '';

  constructor(private loginService: LoginService,
              private route: Router) { }

  ngOnInit() {

  }

  onLogin(formData: NgForm){
    const isLoggedIn = this.loginService.login(formData.value.email, formData.value.pwd);
    if(isLoggedIn){
      this.errorMsg = '';
      this.route.navigate(['/home']);
    }else{
      this.errorMsg = 'Login error';
    }
  }

}
