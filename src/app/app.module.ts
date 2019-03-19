import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ArtistService } from './service/artist.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SelectedArtistComponent } from './selected-artist/selected-artist.component';
import { SearchArtistInputComponent } from './search-artist-input/search-artist-input.component';
import { DisplayArtistComponent } from './display-artist/display-artist.component';
import { ResultsDisplayComponent } from './results-display/results-display.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SelectedArtistComponent,
    SearchArtistInputComponent,
    DisplayArtistComponent,
    ResultsDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
