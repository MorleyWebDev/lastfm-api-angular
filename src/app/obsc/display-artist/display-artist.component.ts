import { Component, OnInit, Input } from '@angular/core';
import { ArtistModel } from '../model/artist.model';
import { ArtistService } from '../service/artist.service';

@Component({
  selector: 'app-display-artist',
  templateUrl: './display-artist.component.html',
  styleUrls: ['./display-artist.component.scss']
})
export class DisplayArtistComponent implements OnInit {
  artist: ArtistModel;
  searchErrorFound: boolean;
  chosenArtistsLen: number;
  exists: boolean = false;
  chosenArtists = this.artService.chosenArtists;

  constructor(private artService: ArtistService) { }

  //triggered when user clicks add button - 
  //adds searched artist to the array of selected artists
  chooseArtist(){
    if(this.artService.chosenArtists.length < 3){
      this.artService.chosenArtists.push(this.artist);
       this.artService.artistSearchPing.emit(true);
    }
    if(this.chosenArtists.length != 0){
      this.checkBtn(this.artist);
    }
  }
  

  //if the chosen artists array contains the currently selected artist
  //set exists to true - disabling the 'add' button
  checkBtn(artist: ArtistModel){
    this.exists = this.chosenArtists.some(art => art.name === artist.name)
  }

  ngOnInit() {
    //On search / close refresh the chosen artists array
    //then check if button should exist
    this.artService.artistSearchPing.subscribe(()=>{
      this.chosenArtists = this.artService.chosenArtists;
      this.checkBtn(this.artist);
    })

    //get data from the searched artist
    this.artService.artistSearched.subscribe(data=>{
      if(data.error == true){
        this.searchErrorFound = true;
        return;
      }

      this.searchErrorFound = data.error;
      this.artist = data.artist;
      this.chosenArtistsLen = data.chosenLen;
      this.exists = false;
      
      if(this.chosenArtists.length != 0){
        this.checkBtn(this.artist);
      }
    }) 
  }
}

