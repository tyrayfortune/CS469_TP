import { Component } from '@angular/core';
import { HeaderComponent } from '../../reusableComponents/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-olympic',
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
@NgModule({
  declarations: [OlympicComponent],
  imports: [
    CommonModule,
    HeaderComponent
    // Other modules if needed
  ],
})
export class OlympicModule{}
