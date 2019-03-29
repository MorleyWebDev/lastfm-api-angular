import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { ArtistModel } from '../model/artist.model';
//get api key from
//https://www.last.fm/api/account/create
const api = require('../../apiInfo.json');


@Injectable({
  providedIn: 'root'
})

export class ArtistService {


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
     return fetch(`${api.url}?method=artist.getinfo&artist=${artist}&api_key=${api.key}&format=json`);
   }
   catch (e) {
     console.log(`error in get-artist call- ${e}`);
     throw e;
   }
  }

 async getTopArtist(){
    try {
     return fetch(`${api.url}?method=chart.gettopartists&api_key=${api.key}&format=json`);
   }
   catch (e) {
     console.log(`error in get-top-artist call- ${e}`);
     throw e;
   }
  }
}
