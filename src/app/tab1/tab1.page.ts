import { PatrocinadorService } from './../service/patrocinador.service';
import { NoticiaService } from './../service/noticia.service';
import { Component } from '@angular/core';
import { Banner } from '../model/banner';
import { BannerService } from '../service/banner.service';

import * as Exporting from 'highcharts/modules/exporting';
import * as Highcharts from 'highcharts';
import { chart } from 'highcharts';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Noticia } from '../model/noticias';
import { Patrocinador } from '../model/patrocinador';


Exporting(Highcharts)

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

	banners: Banner[] = [];
	noticias: Noticia[]=[];
	patrocinadores: Patrocinador[]=[];

	constructor(private service: BannerService, private serviceNoticia: NoticiaService, private servicePatrocinador: PatrocinadorService) {

	}
  
  ngOnInit() {
		this.listar();
		
	}

	public listar() {
		this.banners = this.service.findAll();
		this.noticias = this.serviceNoticia.findAll();
		this.patrocinadores = this.servicePatrocinador.findAll();
	}


	@ViewChild('infracao') chartTarget: ElementRef;
	chart: Highcharts.ChartObject;

	@ViewChild('suspensao') chartTarget2: ElementRef;
	chart2: Highcharts.ChartObject;
	

	ngAfterViewInit() {
		const options: Highcharts.Options = {
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false,
				height: 200,
				width:450,
				margin:50,
				type: 'pie'
			},
		  legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        y: 50,
				padding: 3,
        itemMarginTop: 5,
        itemMarginBottom: 5,
        itemStyle: {
            lineHeight: '14px'
				}
    },
			credits: {
				enabled: false
			},
			exporting: {
				enabled: false
			},
			title: {
				text: 'Infração',
				style: {
					"fontSize": "12px"
				}
			},
			tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
			},
			accessibility: {
				point: {
					valueSuffix: '%'
				}
			},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: false,
					},
					showInLegend: true,
					
				}
			},
		
			series: [{
				name: '',
				colorByPoint: true,
				data: [{
					name: 'Infrações Leves',
					y: 61.41,
					sliced: true,
					animation: false,
					selected: true
				}, {
					name: 'Infrações medias',
					y: 11.84
				}, {
					name: 'Infrações graves',
					y: 10.85
				}, {
					name: 'Infrações gravissimas',
					y: 4.67
				}]
			}]
			
		};

		const options2: Highcharts.Options = {
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false,
				height: 250,
				margin:25,
				type: 'pie'
			},
			legend: {
        layout: 'vertical',
        align: 'right',
				verticalAlign: 'top',
				x: -20,
        y: 50,
        padding: 3,
        itemMarginTop: 5,
        itemMarginBottom: 5,
        itemStyle: {
            lineHeight: '14px'
				}
    },
			credits: {
				enabled: false
			},
			exporting: {
				enabled: false
			},
			title: {
				text: 'Suspensão',
				style: {
					"fontSize": "px"
				}

			},
			tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
			},
			accessibility: {
				point: {
					valueSuffix: '%'
				}
			},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: false,
					},
					showInLegend: false
				}
			},
			
			series: [{
				name: 'Suspensão',
				colorByPoint: true,
				data: [{
					name: 'Dirigir com habilitação suspensa',
					y: 61.41,
					sliced: true,
					selected: true
				}, {
					name: 'Infrações gravíssimas',
					y: 11.84
				}, {
					name: 'Infratores reincidentes',
					y: 10.85
				}]
			}]
			
		};

		
	
		this.chart = chart(this.chartTarget.nativeElement, options);
		this.chart = chart(this.chartTarget2.nativeElement, options2);
	}

}


