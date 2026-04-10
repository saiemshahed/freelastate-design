import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronLeft, lucideChevronRight } from '@ng-icons/lucide';

type SlideItem = {
  imageUrl: string;
  title: string;
  description: string;
  cta: string;
};

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [CommonModule, NgIcon],
  providers: [provideIcons({ lucideChevronLeft, lucideChevronRight })],
  templateUrl: './hero-slider.component.html',
})
export class HeroSliderComponent implements OnDestroy {
  slides: SlideItem[] = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&q=80&w=1600',
      title: 'Luxus Strandresort',
      description: 'Erleben Sie maximalen Komfort mit Zimmern direkt am Meer.',
      cta: 'Jetzt Buchen',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1600',
      title: 'Sommer-Auszeit am Meer',
      description: 'Ein kuratierter Aufenthalt fuer exklusive Urlaubsmomente.',
      cta: 'Angebote Entdecken',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&q=80&w=1600',
      title: 'City Skyline Hotel',
      description: 'Moderne Suiten fuer Business und Freizeit auf Premium-Niveau.',
      cta: 'Suite Reservieren',
    },
  ];

  currentIndex = 0;

  private readonly autoplayMs = 4500;
  private autoplayId: ReturnType<typeof setInterval> | null = null;

  constructor() {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  prevSlide(): void {
    this.shiftSlide(-1, true);
  }

  nextSlide(): void {
    this.shiftSlide(1, true);
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.restartAutoplay();
  }

  pauseAutoplay(): void {
    this.stopAutoplay();
  }

  resumeAutoplay(): void {
    this.startAutoplay();
  }

  private startAutoplay(): void {
    if (this.autoplayId || this.slides.length < 2) {
      return;
    }

    this.autoplayId = setInterval(() => {
      this.shiftSlide(1, false);
    }, this.autoplayMs);
  }

  private stopAutoplay(): void {
    if (this.autoplayId) {
      clearInterval(this.autoplayId);
      this.autoplayId = null;
    }
  }

  private restartAutoplay(): void {
    this.stopAutoplay();
    this.startAutoplay();
  }

  private shiftSlide(delta: number, isManual: boolean): void {
    const total = this.slides.length;
    this.currentIndex = (this.currentIndex + delta + total) % total;

    if (isManual) {
      this.restartAutoplay();
    }
  }
}
