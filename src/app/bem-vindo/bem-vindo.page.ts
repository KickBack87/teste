import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bem-vindo',
  templateUrl: './bem-vindo.page.html',
  styleUrls: ['./bem-vindo.page.scss'],
})
export class BemVindoPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  cadastrarLogin(){
    this.router.navigate(['cadastro']);
  }
  
  loginModal(){
    this.router.navigate(['/login']);
  }

}
