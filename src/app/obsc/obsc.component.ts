import { Component, OnInit } from '@angular/core';
import { ArtistService } from './service/artist.service';
import { ArtistModel } from './model/artist.model';


@Component({
  selector: 'app-obsc',
  templateUrl: './obsc.component.html',
  styleUrls: ['./obsc.component.scss'],
  providers: [ArtistService]
})


export class ObscComponent {
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
