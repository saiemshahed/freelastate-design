import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
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
      imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1800',
      title: 'Luxus Strandresort',
      description: 'Erleben Sie maximalen Komfort mit Zimmern direkt am Meer.',
      cta: 'Jetzt Buchen',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&q=80&w=1800',
      title: 'Sommer-Auszeit am Meer',
      description: 'Ein kuratierter Aufenthalt fuer exklusive Urlaubsmomente.',
      cta: 'Angebote Entdecken',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1800',
      title: 'City Skyline Hotel',
      description: 'Moderne Suiten fuer Business und Freizeit auf Premium-Niveau.',
      cta: 'Suite Reservieren',
    },
  ];

  currentIndex = 0;

  private readonly autoplayMs = 4500;
  private autoplayId: ReturnType<typeof setInterval> | null = null;

  constructor(private cdr: ChangeDetectorRef) {
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

  private startAutoplay(): void {
    if (this.autoplayId || this.slides.length < 2) {
      return;
    }

    this.autoplayId = setInterval(() => {
      this.shiftSlide(1, false);
      this.cdr.detectChanges();
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
