import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { toChuckNorrisJoke } from './chuck-norris-joke.mapper';
import { ChuckNorrisJoke, ChuckNorrisJokeModel } from './chuck-norris.model';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisService {

  private readonly chuckNorrisRandomJokeURL = `${environment.apis.chuckNorris}jokes/random`;
  private readonly joke$: Subject<ChuckNorrisJoke>;
  private readonly load$: Subject<void>;
  private readonly isLoading$: BehaviorSubject<boolean>;

  constructor(private httpClient: HttpClient) {
    this.joke$ = new Subject<ChuckNorrisJoke>();
    this.load$ = new Subject<void>();
    this.isLoading$ = new BehaviorSubject<boolean>(false);

    this.initJokeSubscription();
  }

  public get randomJoke(): Observable<ChuckNorrisJoke> {
    return this.joke$.asObservable();
  }
  
  public get isLoading(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }

  public loadRandomJoke(): void {
    this.load$.next();
  }

  private getJoke(): Observable<ChuckNorrisJoke> {
    return this.httpClient.get<ChuckNorrisJokeModel>(this.chuckNorrisRandomJokeURL).pipe(
      map(result => toChuckNorrisJoke(result))
    );
  }

  private initJokeSubscription(): void {
    const result$ = this.load$.pipe(
      tap(() => this.isLoading$.next(!this.isLoading$.value)),
      switchMap(() => this.getJoke()),
      tap(() => this.isLoading$.next(!this.isLoading$.value))
    );

    result$.subscribe(this.joke$);
  }
}
