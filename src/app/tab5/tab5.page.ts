import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { Login } from '../login/login';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  autenticacao: Login;
  logado:Login;


  constructor(private router:Router,
    public authService: LoginService) {
      this.logado = new Login();
     }

  ngOnInit(){
    this.autenticacao = new Login();
  }

  cadastrarLogin(){
    this.router.navigate(['cadastro']);
  }

  logar() {
    this.authService.login(this.autenticacao).subscribe((res) => {
    this.logado = res;
    if (this.logado.email) {
  
    this.authService.armazenaStorage(this.logado);
    this.router.navigate(['tabs/tab1'])
    } else {
    throw new Error('problemas ao Logar');
    }
    }, error => {
    console.log('erro no login');
  }
  );
  }
  loginModal(){
    this.router.navigate(['/login']);
  }

}
