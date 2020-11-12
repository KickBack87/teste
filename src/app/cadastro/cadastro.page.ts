import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login/login';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {


  login: Login;
  
  constructor(private server: LoginService,
    private router: Router) {
      this.login = new Login();
     }

     voltarInicio(){
      this.router.navigate(['/tabs/tab5'])
    }

     public registrar(){ 
      
      this.server.registrar(this.login).subscribe(res => {
        let usu = JSON.stringify(this.login);
        localStorage.setItem('dados', JSON.stringify(this.login));
      
      }, error => {
        console.log('erro: ', error);
        localStorage.setItem('dados', 'error');
      })
        this.router.navigate(['/login']);
  }

  loginModal(){
    this.router.navigate(['/login']);
  }


  ngOnInit() {
  }

}
