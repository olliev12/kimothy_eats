import { Component, HostListener } from '@angular/core';
import * as AppConfig  from '../config/app-config';
import { AppGlobal } from '../services/app-global';
import { getWindow } from 'ssr-window';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  readonly footerNavLinks: AppConfig.RouteType[] = AppConfig.footerNavLinks;
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
