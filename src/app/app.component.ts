import { ChuckNorrisService } from './chuck-norris.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Chuck Norris random Jokes';
  public readonly joke$ = this.chuckNorrisService.randomJoke;

  constructor(private chuckNorrisService: ChuckNorrisService){}

  public ngOnInit(): void {
    this.loadRandomJoke();
  }

  public loadRandomJoke(): void {
    this.chuckNorrisService.loadRandomJoke();
  }
}
