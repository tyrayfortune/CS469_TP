import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  data: any = {
    connectLinks : [
      {link : "https://parks.wa.gov/about/contact-us", text : "Contact Us"},
      {link : "https://parks.wa.gov/about/jobs", text : "Apply For A Job"},
      {link : "https://parks.wa.gov/about/strategic-planning-projects-public-input/projects", text : " Park Pojects"}
    ],
    travelLinks : [
      {link : "https://washington.goingtocamp.com/", text : "Make A Reservation"},
      {link : "https://parks.wa.gov/passes-permits/get-park-pass/discover-pass", text : "Buy Discover Pass"},
      {link : "https://parks.wa.gov/passes-permits/permits", text : "Get Permit"}
    ],
    mediaLinks : [
      {link : "https://www.facebook.com/WashingtonStateParks", text : "Facebook"},
      {link : "https://twitter.com/WAStatePks", text : "Twitter"},
      {link : "https://www.instagram.com/wastatepks/", text : "Instagram"}
    ]
  }

}
