import { Component, OnInit } from '@angular/core';
import { ArtistService } from './obsc/service/artist.service';
import { ArtistModel } from './obsc/model/artist.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArtistService]
})


export class AppComponent {
  // title = 'lastfm';
  chosenArtists: ArtistModel[] = [];
  topWeeklyListeners: number;
  artist: ArtistModel;
  searchErrorFound = false;


  constructor(private artService: ArtistService){
  }

  ngOnInit(){
    this.chosenArtists = this.artService.chosenArtists;
  }

  artistSearched(data){
    if(data == null){
      this.artService.artistSearched.emit({
        error: true,
        chosenLen: this.chosenArtists.length
      })
      return;
    }

    this.artist = new ArtistModel(
        data.name,
        data.image,
        data.listeners,
        data.obscurity,
        data.summary
      );

      this.artService.artistSearched.emit({
        artist: this.artist,
        error: false,
        chosenLen: this.chosenArtists.length
      })
  }
}
