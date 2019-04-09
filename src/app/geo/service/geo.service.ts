import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
const api = require('../../apiInfo.json');


@Injectable({
  providedIn: 'root'
})  

export class GeoService {

  topGeoArtist = new Subject<string>();

  constructor( private http: HttpClient ) { }

  searchCountry(country: string) {
    return this.http.get(`${api.url}?method=geo.gettopartists&country=${country}&api_key=${api.key}&format=json`)
  }

}
