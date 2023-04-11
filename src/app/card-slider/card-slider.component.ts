import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.css']
})
export class CardSliderComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/700/400`);
}
