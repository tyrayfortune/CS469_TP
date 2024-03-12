import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../reusableComponents/header/header.component';
import { FooterComponent } from '../../reusableComponents/footer/footer.component';
@Component({
  selector: 'app-olympic',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './olympic.component.html',
  styleUrl: './olympic.component.css'
})
export class OlympicComponent {
  highlights = [
    {
      title: 'Hiking Trails',
      description: 'Explore scenic hiking trails with breathtaking views.',
      image: 'path-to-your-image1.jpg'
    },
    {
      title: 'Wildlife Watching',
      description: 'Observe diverse wildlife in their natural habitat.',
      image: 'path-to-your-image2.jpg'
    },
    // Add more highlights
  ];
}

