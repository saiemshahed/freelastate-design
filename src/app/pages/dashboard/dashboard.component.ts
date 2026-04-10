import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideBell, lucideCalendar, lucideClock, lucideEye, lucideMapPin, lucideShield, lucideUsers, lucideVideo } from '@ng-icons/lucide';
import { HeroSliderComponent } from '../../components/hero-slider/hero-slider.component';
import { TourInterestComponent } from '../../components/tour-interest/tour-interest.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, NgIcon, HeroSliderComponent, TourInterestComponent],
  providers: [provideIcons({ lucideBell, lucideVideo, lucideShield, lucideUsers, lucideCalendar, lucideArrowRight, lucideEye, lucideMapPin, lucideClock })],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  tours = [
    'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800',
  ];
  titles = ['Robby Testing', 'Neue Version', 'test editor', 'Gewoba Hollergrund', 'Muster Wohnung', 'Stadtvilla'];
}
