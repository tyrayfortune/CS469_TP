import { Component , NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../reusableComponents/header/header.component';
import { FooterComponent } from '../../reusableComponents/footer/footer.component';

@Component({
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
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
  
  textObj = {
    textHeader : "Welcome to Discovering the Beauty of Washington!",
    textContent :"Discover the splendor of Washington State through its majestic parks, where the serene whispers of nature invite you to explore the untamed beauty of the Pacific Northwest. From the rugged coastline of the Olympic Peninsula to the cascading peaks of the Cascade Range, each park is a gateway to adventure, reflection, and awe. Traverse lush rainforests, wander through arid landscapes sculpted by ancient lava flows, and behold waterfalls that carve their way through the heart of verdant valleys. Washington's state parks are more than just patches of protected land—they are chapters in a story, inviting you to be part of the narrative. Whether you're seeking a tranquil retreat or an exhilarating journey, begin your exploration here and let Washington's natural wonders reveal their secrets to you.",
  }
}
