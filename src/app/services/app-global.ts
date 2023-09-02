import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import * as AppConfig from './../config/app-config';

@Injectable()
export class AppGlobal {
  headerHeight: BehaviorSubject<number> = new BehaviorSubject<number>(90);
  footerHeight: BehaviorSubject<number> = new BehaviorSubject<number>(190);
  menuOpened: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(public router: Router) {

  }
  public routeType(calc: AppConfig.RouteType, child?: AppConfig.Route) {
    const route = `${calc.route}/${child?.route ?? ''}`;
    return route;
  }

  public noHref() {
    return false;
  }

  public toggleMenu() {
    this.menuOpened.next(!this.menuOpened.value);
  }

  public getMenuOpened(): boolean {
    return this.menuOpened.value;
  }

  getNumberOfCharacters(strArr: string[], alphabet: string): number {
    let numOfChars = 0;

    strArr.forEach((char) => {
      numOfChars += alphabet.includes(char) ? 1 : 0;
    });

    return numOfChars;
  }


}
