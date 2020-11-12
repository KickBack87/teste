import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../login/login';



const URL= "http://localhost:3000";
const URLDOIS="http://localhost:3000";
import { Observable } from 'rxjs';

@Injectable()
export class LoginService{
  logado:Login;
  constructor(private http: HttpClient) {
        this.logado = new Login();
    }

    public registrar(login: Login): Observable<Login>{
      return this.http.post<Login>(`${URL}/register`, login);
  }

  public login(login: Login): Observable<Login>{
      return this.http.post<Login>(`${URL}/auth`, login);
  }

  public create(login: Login) {
      return this.http.post<Login>(`${URL}`, login);
      }
      public findAll() {
      return this.http.get<Login[]>(`${URL}`);
      }
      public findById(id: number) {
      return this.http.get<Login>(`${URL}/${id}`);
      }

  public findByLogin(login: Login) {
      return this.http.post<Login>(`${URLDOIS}`, login);
      }
  
  public armazenaStorage(login: Login) {
      localStorage.setItem('logado', JSON.stringify(login));
      }
      //esta logado (Auth)
      isLogado() {
      try {
      let logado = localStorage.getItem('logado');
      console.log('Parte Um verificar');
      if (logado) {
      return true;
      }
      return false;
      } catch (error) {
      console.log('Parte dois verificado - deu ruim ');
      return false;
      }
      }
      getLogado() {
      return JSON.parse(localStorage.getItem('logado')[0]);
      }
     }