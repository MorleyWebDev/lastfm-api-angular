import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../service/artist.service';
import { ArtistModel } from '../model/artist.model';
declare var $: any;


@Component({
  selector: 'app-results-display',
  templateUrl: './results-display.component.html',
  styleUrls: ['./results-display.component.scss']
})
export class ResultsDisplayComponent implements OnInit {

  constructor(private artService: ArtistService) { }

  artists: ArtistModel[] = [];
  overallStats: {obscurity: number, listeners: number} = {obscurity: 0, listeners: 0}

  ngOnInit() {
    this.artService.sendFinalCalc.subscribe((result: ArtistModel[]) => {
      result.forEach(singleartist => {
        if(singleartist.obscurity > 100) {singleartist.obscurity = 100}
        this.artists.push(singleartist);
        this.overallStats.obscurity += singleartist.obscurity;
        this.overallStats.listeners += Math.round(singleartist.listeners);
      })
      this.overallStats.obscurity = Math.round(this.overallStats.obscurity /= 3);
      $('#modal').modal();
    })
  }

  reset(){
    this.artists.length = 0;
    this.overallStats = {obscurity: 0, listeners: 0}
    this.artService.chosenArtists.length = 0;
    this.artService.artistSearched.emit({
      error: false, 
      chosenLen: 0 
    })
  }
}
