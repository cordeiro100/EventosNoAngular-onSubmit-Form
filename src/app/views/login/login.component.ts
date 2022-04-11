import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { validateBasis } from '@angular/flex-layout';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  
  formLogin: FormGroup
  
  
  
  
  constructor(private loginService: LoginService, private router: Router, private formBuilder: FormBuilder) {
    this.formLogin = this.formBuilder.group({
      email: [Validators.compose, Validators.required],
      senha: [Validators.compose, Validators.required]
    })

  }
    
  ngOnInit(): void {}
  loginModel = new User("","","");

  mensagem = ""

  logar() {
    this.loginService.login(this.loginModel).subscribe((response)=>{
      this.router.navigateByUrl('')

    },(respostaErro)=>{
      this.mensagem = respostaErro.error
      console.log(this.mensagem)
    


    })
  }
}
