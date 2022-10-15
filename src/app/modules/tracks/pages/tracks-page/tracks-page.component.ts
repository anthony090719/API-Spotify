import { Component, OnInit, TrackByFunction } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';
import * as dataRaw from '../../../../data/tracks.json';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {
  tracksTrending: Array <TrackModel> = []
  tracksRandom: Array <TrackModel> = []

  ListObservers$: Array<Subscription> = []

  constructor( private tracksService:TrackService ) { }

  ngOnInit(): void {
    const observer1$ = this.tracksService.dataTracksTrending$
    .subscribe(Response => {
      this.tracksTrending = Response
      this.tracksRandom = Response
      console.log('Canciones trending',Response)
    })

    const observer2$ = this.tracksService.dataTracksRandom$
    .subscribe(Response => {
      this.tracksRandom = [...this.tracksRandom, ...Response]
      console.log('Canciones random entrando',Response);
    })


    this.ListObservers$ = [observer1$, observer2$]
  }
  ngOnDestroy(): void{
    this.ListObservers$.forEach(u => u.unsubscribe())
  }

}
