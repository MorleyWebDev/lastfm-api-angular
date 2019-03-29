import { Component, OnInit } from '@angular/core';
import { GeoService } from './service/geo.service';
import { Config } from 'protractor';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.scss'],
  providers: [GeoService]
})
export class GeoComponent implements OnInit {



  constructor(private GeoService: GeoService) { }


  ngOnInit() {
    console.log('top 50 artists in malta > ');

    this.GeoService.searchCountry('malta')
    .subscribe
      ((data: {topartists: any}) => {
        data.topartists.artist.forEach(artist => {
        console.log(artist);
        })
     } 
    );
  }
}
