import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  produtos: Produto[]=[];

  constructor(private serviceProduto: ProdutoService, 
    private router:Router) { }

  ngOnInit() {
    this.listar();
  }


  public listar() {
		this.produtos=this.serviceProduto.findAll();
  }

  pagamento(){
    this.router.navigate(['tabs/pagamento']);
  }



}
