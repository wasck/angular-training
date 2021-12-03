import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

interface NavItem {
  label: string;
  path: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public readonly title = 'Chuck Norris App';
  public navItems?: Array<NavItem>;
  public isSidenavOpen$?: Observable<boolean>;

  constructor(private appService: AppService){}

  public ngOnInit(): void {
    this.initHeader();
    this.initNavItems();
  }

  public toggleSidenav(): void {
    this.appService.toggleSidenav();
  }

  private initHeader(): void {
    this.isSidenavOpen$ = this.appService.sidenavIsOpen;
  }

  private initNavItems(): void {
    this.navItems = [
      { label: 'Chuck Norris', path: '/chuck-jokes' },
    ]
  }
}
