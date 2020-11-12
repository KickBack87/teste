import { Component, OnInit, Input } from '@angular/core';
import { Banner } from '../model/banner';
import { BannerService } from '../service/banner.service';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  banners: Banner[] = [];

	constructor(private service: BannerService) {

	}

	ngOnInit() {
		this.listar();
		
	}

	public listar() {
		this.banners = this.service.findAll();
	}

	subtitleFormat = (percent: number) : string => {
		if(percent >= 100){
		  return "Congratulations!"
		}else if(percent >= 50){
		  return "Half"
		}else if(percent > 0){
		  return "Just began"
		}else {
		  return "Not started"
		}
	  }

}
