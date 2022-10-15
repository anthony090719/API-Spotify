import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json'
import { TracksModule } from '../tracks.module';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTracksTrending$:Observable<TrackModel[]> = of([])
  dataTracksRandom$:Observable<TrackModel[]> = of([])

  constructor() {
    const {data}: any = (dataRaw as any).default;
    this.dataTracksTrending$ = of(data)

    this.dataTracksRandom$ = new Observable((observer) => {
      const tracksExample: TrackModel = {
        _id: 9,
        name:'Love',
        album:'Cartel de santa',
        url:'http://',
        cover:'https://th.bing.com/th/id/OIP.D4U5sfzJq5zEtuKFEhew1gHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7'
      }
     setTimeout(() => {
      observer.next([tracksExample])
     }, 3500)

    })
   }
}
