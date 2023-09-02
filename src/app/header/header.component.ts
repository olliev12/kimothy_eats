import { Component, HostListener } from '@angular/core';
import { AppGlobal } from '../services/app-global';
import * as AppConfig  from '../config/app-config';
import { getWindow } from 'ssr-window';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  readonly headerNavLinks: AppConfig.RouteType[] = AppConfig.headerNavLinks;
  public menuOpen = false;
  public isMobile = false;

  constructor(public appGlobal: AppGlobal) {
    this.isMobile = this.isWindowMobile();
  }

  public toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.appGlobal.toggleMenu();
  }

  @HostListener('window:resize')
  public checkMobile() {
    this.isMobile = this.isWindowMobile();
  }

  isWindowMobile(): boolean {
    return getWindow()?.innerWidth < 767;
  }
}
