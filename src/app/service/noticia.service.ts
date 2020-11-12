import { listaNoticia } from './noticia';
import { Noticia } from './../model/noticias';
import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class NoticiaService {

	noticias: Noticia[] = [];

	constructor() {
		this.noticias = listaNoticia;
	
	}

	public findAll(): Noticia[] {
		return this.noticias;
	}
}
