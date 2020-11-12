import { Injectable } from '@angular/core';
import { Banner } from '../model/banner';
import { lista } from './banner';

@Injectable({
	providedIn: 'root'
})
export class BannerService {

	banners: Banner[] = [];

	constructor() {
		this.banners = lista;
	
	}

	public findAll(): Banner[] {
		return this.banners;
	}
}
