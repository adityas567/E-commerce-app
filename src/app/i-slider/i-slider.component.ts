import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-i-slider',
  templateUrl: './i-slider.component.html',
  styleUrls: ['./i-slider.component.css']
})
export class ISliderComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1400/200`);
  
}
