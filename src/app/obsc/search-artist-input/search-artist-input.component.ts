import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';
import { ArtistService } from '../service/artist.service';
import { ArtistModel } from '../model/artist.model';
declare var $: any;

@Component({
  selector: 'app-search-artist-input',
  templateUrl: './search-artist-input.component.html',
  styleUrls: ['./search-artist-input.component.scss']
})
export class SearchArtistInputComponent implements OnInit {
  artistinput: string;
  artist: ArtistModel;
  chosenArtists: ArtistModel[];
  @Output() artistSearched = new EventEmitter<any>();
  topListeners: number;
  @ViewChild('input') input: ElementRef;
  

  constructor(private artService: ArtistService) { }

  ngOnInit() {
    this.artService.getTopArtist()
    .then(data => data.json())
    .then(data =>{
      let avgTopListeners = 0;
      data.artists.artist.forEach((e) =>{
        avgTopListeners += parseInt(e.listeners);
      })
      this.topListeners = Math.round((avgTopListeners / 50));
    })


    this.artService.artistSearchPing.subscribe((chosen: boolean)=>{
      if(chosen == true){
        this.input.nativeElement.value='';
        if(parseInt($(window).width()) > 992){
          this.input.nativeElement.focus();
        }
        this.artService.artistSearchPing.emit(false);
      }
    });
    this.chosenArtists = this.artService.chosenArtists;
  }

  searchartist() {
    if(this.artistinput != ''){
      this.artService.getArtist(this.artistinput)
      .then((data) => data.json())
      .then((data)=>{
         let name = data.artist.name;
         let image = data.artist.image[5]['#text'];
         let listeners = data.artist.stats.listeners;
         let obscurity = parseInt(((listeners / this.topListeners)*100).toFixed(2));
         //remove broken <a> tag at the end of the summary res
         let summary = data.artist.bio.summary.replace(/\<.+/g, "");
         let artist = new ArtistModel(name, image, listeners, obscurity, summary);

         //pass the artist into service to be used by other components
         this.artistSearched.emit(artist);
         this.artistinput = '';
       }
      ).catch(e => {
        //no artist found - send null artist to root
        this.artistSearched.emit(null);
      })
    }
  }

  CalcObsc(){
    this.artService.sendFinalCalc.emit(
      this.chosenArtists
      )
  }
  
}
