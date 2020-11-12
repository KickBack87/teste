import { Patrocinador } from './../model/patrocinador';
import { Injectable } from '@angular/core';
import { listaPatrocinadores } from './patrocinador';


@Injectable({
	providedIn: 'root'
})
export class PatrocinadorService {

	patrocinadores: Patrocinador[] = [];

	constructor() {
		this.patrocinadores = listaPatrocinadores;
	
	}

	public findAll(): Patrocinador[] {
		return this.patrocinadores;
	}
}
