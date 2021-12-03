import { ChuckNorrisService } from './chuck-norris.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly componentDestroy$ = new Subject<void>();

  public readonly title = 'Chuck Norris random Jokes';
  public readonly joke$ = this.chuckNorrisService.randomJoke.pipe(
    takeUntil(this.componentDestroy$) // delete subscription on component destroy
  );

  constructor(private chuckNorrisService: ChuckNorrisService){}

  public ngOnInit(): void {
    this.loadRandomJoke();
  }

  public ngOnDestroy(): void {
    this.componentDestroy$.next();
    this.componentDestroy$.complete();
  }

  public loadRandomJoke(): void {
    this.chuckNorrisService.loadRandomJoke();
  }
}
