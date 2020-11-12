import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router:Router) {}


  contratar(){
    this.router.navigate(['tabs/carrinho']);
  }

  voltarPag(){

this.router.navigate(['tabs/tab1']);

  }

  avancarPag(){

    this.router.navigate(['tabs/documentos']);
    
      }
}
