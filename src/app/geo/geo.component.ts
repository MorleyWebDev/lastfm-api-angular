import { Component, OnInit } from '@angular/core';
import { GeoService } from './service/geo.service';
import { Config } from 'protractor';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.scss'],
  providers: [GeoService]
})
export class GeoComponent implements OnInit {
  
  selectedGeo = new Subject<string>();
  topArtist: string = "";

  constructor(private GeoService: GeoService) { }

  ngOnInit() {
    //to do :
    // add input field to allow country searching
    //move this into a listener for the input field
    this.GeoService.searchCountry('brazil')
    .subscribe
      ((data: {topartists: any}) => {
        this.GeoService.topGeoArtist.next(data.topartists.artist[0]);

        data.topartists.artist.forEach(artist => {
        //for each top 50 artists - artist = single artist object
        })
     } 
    );

     this.GeoService.topGeoArtist.subscribe((artist: any) => {
         this.topArtist = artist.name;
         //to do : get detailed information about the top artist
         //from the obsc service.
         
     })
  }
}
