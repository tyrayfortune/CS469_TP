import { Component , NgModule} from '@angular/core';
import { HeaderComponent } from '../../reusableComponents/header/header.component';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-mount-rainier',
  templateUrl: './mount-rainier.component.html',
  styleUrl: './mount-rainier.component.css'
})


export class MountRainierComponent {
  showContent: boolean[] = [false, false, false, false, false, false, false, false, false];

  toggleContent(index: number): void {
    this.showContent[index] = !this.showContent[index];
  }

  bubbleContent = [
    "Explore the Wonderland Trail, a stunning 93-mile loop around Mount Rainier.",
    "Take a scenic drive through Sunrise, the highest point accessible by car in the park.",
    "Hike to the breathtaking Comet Falls for a refreshing experience.",
    "Join a ranger-led program to learn more about the park's flora and fauna.",
    "Experience the beauty of wildflowers in full bloom during the summer months.",
    "Capture the iconic reflection lakes with Mount Rainier in the background.",
    "Go snowshoeing or cross-country skiing in the winter wonderland.",
    "Enjoy a picnic with stunning views at one of the designated picnic areas.",
    "Stargaze at night and witness the beauty of the starlit sky away from city lights.",
  ];

}

@NgModule({
  declarations: [MountRainierComponent],
  imports: [
    CommonModule,
    HeaderComponent
    // Other modules if needed
  ],
})
export class MountRainierModule{}
