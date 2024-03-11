import { Component , NgModule} from '@angular/core';
import { HeaderComponent } from '../../reusableComponents/header/header.component';
import { CommonModule } from '@angular/common';



@Component({
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  selector: 'app-mount-rainier',
  templateUrl: './mount-rainier.component.html',
  styleUrl: './mount-rainier.component.scss'
})


export class MountRainierComponent {

  data: any = {
    carousel: [
      { img: "app/assets/photos/mount-rainier1.jpg", text: "A beautiful view from a dry creekbed during the Washington summertime." },
      { img: "app/assets/photos/mount-rainier2.jpg", text: "The Mount Fremont Fire Lookout provides a great view looking up some of Mount Rainier's largest glaciers; Emmons and Winthrop Glaciers." },
      { img: "app/assets/photos/mount-rainier3.jpg", text: "Gobblers Knob Fire Lookouts provides hikers with up close views of Mount Rainier in many weather conditions." },
      { img: "app/assets/photos/mount-rainier4.jpg", text: "Shriner Peak Fire Lookout stands on its sunny summit in the park's southeast corner." },
      { img: "app/assets/photos/mount-rainier5.jpg", text: "Louise Lake along Stevens Canyon Road. Highlighted hear is the hidden beauty within the mountains." },
    ]
  };
  slideIndex = 1;
  ngOnInit() {
    this.showSlides(this.slideIndex);
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number) {
    let slides = this.data.carousel;
    if (n > slides.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
      slides[i].display = 'none';
    }
    slides[this.slideIndex - 1].display = 'block';
  }
}
