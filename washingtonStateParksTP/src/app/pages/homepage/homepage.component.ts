import { Component , NgModule} from '@angular/core';
import { HeaderComponent } from '../../reusableComponents/header/header.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})


export class HomepageComponent {
  images = [
    {
      src: 'app/assets/photos/MountRainier.jpeg',
      alt: 'A beautiful landscape showing the diverse beauty of Washington State.',
    },
    {
      src: 'app/assets/photos/Olympic.jpg',
      alt: 'Exploring the dense forests of Washington State.',
    },
    {
      src: 'app/assets/photos/SaltWater.jpg',
      alt: 'The breathtaking views from a mountaintop in Washington State.',
    },
  ];

  textContent = 'This is a website that is dedicated to adventuring around in Washington State. Discover hidden gems, explore landscapes, and immerse yourself in nature.';
}

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    HeaderComponent
    // Other modules if needed
  ],
})
export class HomepageModule {}
