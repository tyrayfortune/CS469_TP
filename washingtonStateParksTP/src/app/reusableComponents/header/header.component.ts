import { Component } from '@angular/core';
//common module is to use angulars inline html if and for loop logic.
import { CommonModule } from '@angular/common';
//subscription and breakpoints import all are for listening to viewpoints
import { Subscription } from 'rxjs';
import { ResponsiveService, Breakpoints } from '../../services/responsive.services';
import * as jsonData from '../../assets/data/headerData.json'

@Component({
  selector: 'app-header',
  //standalone  is a new angular 14 feature that allows this componant to be imported without extra work essentially.
  standalone: true,
  imports: [CommonModule],
  // gets our html and scss below
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  data = jsonData
  //to listen for screen size breakpoints/changes
  private breakpointSubscription: Subscription | null = null;
  currentBreakpoint: Breakpoints | null = null;
  constructor(private responsiveService: ResponsiveService) {}

  ngOnInit() {
    //updates screensize changes
    this.breakpointSubscription = this.responsiveService.getBreakpoint()
      .subscribe(breakpoint => {
        console.log(breakpoint)
        this.currentBreakpoint = breakpoint;
        console.log(breakpoint)
      });
  }

  ngOnDestroy() {
    //unsibes from subscription to prevent memory leakage
    this.breakpointSubscription?.unsubscribe();
  }
}
