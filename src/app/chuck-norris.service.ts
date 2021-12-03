import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable, Subject, switchMap, tap } from 'rxjs';

interface ChuckNorrisRandomJoke {
  categories: [];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisService {

  private readonly chuckNorrisRandomJokeURL = 'https://api.chucknorris.io/jokes/random';
  private readonly joke$: Subject<string>;
  private readonly load$: Subject<void>;

  constructor(private httpClient: HttpClient) {
    this.joke$ = new Subject<string>();
    this.load$ = new Subject<void>();

    this.initJoke();
  }

  public get randomJoke(): Observable<string> {
    return this.joke$.asObservable();
  }

  public loadRandomJoke(): void {
    this.load$.next();
  }

  private getJoke(): Observable<ChuckNorrisRandomJoke> {
    return this.httpClient.get<ChuckNorrisRandomJoke>(this.chuckNorrisRandomJokeURL);
  }

  private initJoke(): void {
    const result$ = this.load$.pipe(
      switchMap(() => this.getJoke()),
      map((result) => result.value),
    );

    result$.subscribe(this.joke$);
  }
}
