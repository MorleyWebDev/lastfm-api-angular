import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { ArtistModel } from '../model/artist.model';


@Injectable({
  providedIn: 'root'
})

export class ArtistService {
  apiUrl = 'http://ws.audioscrobbler.com/2.0/';

  //get api key from
  //https://www.last.fm/api/account/create
  apiKey = '';
  chosenArtists: ArtistModel[] = [];
  artistSearchPing = new EventEmitter<boolean>();
  
  artistSearched = new EventEmitter<{
    artist?: ArtistModel, 
    error: boolean, 
    chosenLen: number}>();

   sendFinalCalc = new EventEmitter<ArtistModel[]>();

  constructor() { }

 async getArtist(artist: string){
   try { 
     return fetch(`${this.apiUrl}?method=artist.getinfo&artist=${artist}&api_key=${this.apiKey}&format=json`);
   }
   catch (e) {
     console.log(`error in get-artist call- ${e}`);
     throw e;
   }
  }

 async getTopArtist(){
    try {
     return fetch(`${this.apiUrl}?method=chart.gettopartists&api_key=${this.apiKey}&format=json`);
   }
   catch (e) {
     console.log(`error in get-top-artist call- ${e}`);
     throw e;
   }
  }
}
