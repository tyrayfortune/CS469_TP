//  this whole file is to deal with different view sizes

import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum Breakpoints {
XS = 'xs', // Extra small devices (phones)
SM = 'sm', // Small devices (tablets)
MD = 'md', // Medium devices (some tablets, small laptops)
LG = 'lg', // Large devices (laptops/desktops)
XL = 'xl'  // Extra large devices (large desktops)
}

@Injectable({
providedIn: 'root'
})
export class ResponsiveService {
private currentBreakpoint = new BehaviorSubject<Breakpoints>(this.getDeviceSize());

constructor() {
    this.checkWindowSize();
}

@HostListener('window:resize', ['$event'])
onResize(event: Event) {
    this.checkWindowSize();
}

private checkWindowSize() {
    const width = window.innerWidth;
    let breakpoint: Breakpoints;
    if (width < 576) {
    breakpoint = Breakpoints.XS; //phones
    } else if (width >= 576 && width < 768) {
    breakpoint = Breakpoints.SM;
    } else if (width >= 768 && width < 992) {
    breakpoint = Breakpoints.MD;
    } else if (width >= 992 && width < 1200) {
    breakpoint = Breakpoints.LG;
    } else {
    breakpoint = Breakpoints.XL;
    }
    this.currentBreakpoint.next(breakpoint);
}

getBreakpoint() {
    return this.currentBreakpoint.asObservable();
}

private getDeviceSize() {
    const width = window.innerWidth;
    if (width < 576) {
    return Breakpoints.XS;
    } else if (width >= 576 && width < 768) {
    return Breakpoints.SM;
    } else if (width >= 768 && width < 992) {
    return Breakpoints.MD;
    } else if (width >= 992 && width < 1200) {
    return Breakpoints.LG;
    } else {
    return Breakpoints.XL;
    }
}
}
