import { Component, OnInit, Input } from '@angular/core';
import { ArtistModel } from '../model/artist.model';

@Component({
  selector: 'app-selected-artist',
  templateUrl: './selected-artist.component.html',
  styleUrls: ['./selected-artist.component.css']
})
export class SelectedArtistComponent implements OnInit {

  @Input() chosenArtists: ArtistModel[] = [];

  constructor() { }

  ngOnInit() {
    
  }

}
