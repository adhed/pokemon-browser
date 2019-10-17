import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-pokemon-browser',
  templateUrl: './pokemon-browser.component.html',
  styleUrls: ['./pokemon-browser.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonBrowserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
