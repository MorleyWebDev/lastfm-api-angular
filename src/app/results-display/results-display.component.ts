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
  overallObscurity: number = 0;

  ngOnInit() {
    this.artService.sendFinalCalc.subscribe((result: ArtistModel[]) => {
      result.forEach(singleartist => {
        this.artists.push(singleartist);
        this.overallObscurity += singleartist.obscurity;
      })
     this.overallObscurity = Math.round(this.overallObscurity /= 3);
      // this.overallObscurity.toFixed();
      $('#modal').modal();
    })
  }

}
