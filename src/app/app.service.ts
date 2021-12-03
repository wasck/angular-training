import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private sidenavIsOpen$: BehaviorSubject<boolean>;

  constructor() {
    this.sidenavIsOpen$ = new BehaviorSubject<boolean>(false);
  }

  public get sidenavIsOpen(): Observable<boolean> {
    return this.sidenavIsOpen$.asObservable();
  }

  public toggleSidenav(): void {
    this.sidenavIsOpen$.next(!this.sidenavIsOpen$.value);
  }

}
