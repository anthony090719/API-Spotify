import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { TrackService } from '@modules/tracks/services/track.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  mainMenu: {
    defaultOptions: Array<any>,
    accessLink: Array<any>
  } = {defaultOptions: [], accessLink: []}

  customOptions: Array<any> = []

  constructor(private router: Router, private trackService: TrackService) { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router:['/','auth']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router:['/','history']
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router:['/','favorites'],
        query: {hola:'mundo'}
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square',
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical',
      }
    ]

    this.customOptions = [
      {
        name: 'Mi lista #1',
        router:['/']
      },
      {
        name: 'Mi lista #2',
        router:['/']
      },
      {
        name: 'Mi lista #3',
        router:['/']
      },
      {
        name: 'Mi lista #4',
        router:['/']
      }
    ]

    this.trackService.dataTracksRandom$
    .subscribe((response: any) => {
      this.customOptions.push(
        {
          name: response[0].name,
          router: []
      }
      )
    })
  }
goTo($event: any): void {
  this.router.navigate([''],{
    queryParams:{
      key1: 'value1',
      key2: 'value2',
      key3: 'value3'
    }
  })
  console.log($event)
}
}