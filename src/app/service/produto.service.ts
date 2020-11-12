import { Injectable } from '@angular/core';

import { Produto } from '../model/produto';
import { listaProduto } from './produto';


@Injectable({
	providedIn: 'root'
})
export class ProdutoService {

	produtos: Produto[] = [];

	constructor() {
		this.produtos = listaProduto;
	
	}

	public findAll(): Produto[] {
		return this.produtos;
	}
}
