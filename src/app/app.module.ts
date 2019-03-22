import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ArtistService } from './obsc/service/artist.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SelectedArtistComponent } from './obsc/selected-artist/selected-artist.component';
import { SearchArtistInputComponent } from './obsc/search-artist-input/search-artist-input.component';
import { DisplayArtistComponent } from './obsc/display-artist/display-artist.component';
import { ResultsDisplayComponent } from './obsc/results-display/results-display.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ObscComponent } from './obsc/obsc.component';
import { GeoComponent } from './geo/geo.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "obsc", component: ObscComponent},
  {path: "geo", component: GeoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SelectedArtistComponent,
    SearchArtistInputComponent,
    DisplayArtistComponent,
    ResultsDisplayComponent,
    HomeComponent,
    ObscComponent,
    GeoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
