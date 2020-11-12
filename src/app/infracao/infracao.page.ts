import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infracao',
  templateUrl: './infracao.page.html',
  styleUrls: ['./infracao.page.scss'],
})
export class InfracaoPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  voltarDoc(){

    this.router.navigate(['tabs/documentos']);
    
      }

}
