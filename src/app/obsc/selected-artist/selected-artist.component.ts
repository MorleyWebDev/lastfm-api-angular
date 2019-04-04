import { Component, OnInit, Input } from '@angular/core';
import { ArtistModel } from '../model/artist.model';
import { ArtistService } from '../service/artist.service';

@Component({
  selector: 'app-selected-artist',
  templateUrl: './selected-artist.component.html',
  styleUrls: ['./selected-artist.component.css']
})
export class SelectedArtistComponent implements OnInit {

  @Input() chosenArtists: ArtistModel[] = [];

  constructor(private artService: ArtistService) { }

  removeSelection(i){
    this.artService.chosenArtists.splice(i, 1);
  }

  ngOnInit() {
    
  }

}
