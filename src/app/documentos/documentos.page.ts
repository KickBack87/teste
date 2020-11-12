import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.page.html',
  styleUrls: ['./documentos.page.scss'],
})
export class DocumentosPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  voltarPagTab2(){

    this.router.navigate(['tabs/tab2']);
    
      }

      avancarPagIn(){

        this.router.navigate(['tabs/infracao']);
        
          }

}
