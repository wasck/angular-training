import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil, combineLatest } from 'rxjs';
import { ChuckNorrisService } from './chuck-norris.service';

@Component({
  selector: 'app-chuck-norris-jokes',
  templateUrl: './chuck-norris-joke.component.html',
  styleUrls: ['./chuck-norris-joke.component.scss']
})
export class ChuckNorrisJokeComponent implements OnInit, OnDestroy {
  private readonly componentDestroy$ = new Subject<void>();

  public readonly title = 'Chuck Norris random Jokes';
  public readonly joke$ = this.chuckNorrisService.randomJoke.pipe(
    takeUntil(this.componentDestroy$) // delete subscription on component destroy
  );
  public isLoading$ = this.chuckNorrisService.isLoading.pipe(
    takeUntil(this.componentDestroy$) // delete subscription on component destroy
  );

  constructor(private chuckNorrisService: ChuckNorrisService) { }

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
