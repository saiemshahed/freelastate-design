import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBadgeCheck, lucideSparkles, lucideTrendingUp, lucideUsersRound, lucideWandSparkles } from '@ng-icons/lucide';

type HighlightItem = {
  icon: string;
  title: string;
  text: string;
  tone: string;
};

@Component({
  selector: 'app-tour-interest',
  standalone: true,
  imports: [CommonModule, NgIcon],
  providers: [provideIcons({ lucideTrendingUp, lucideWandSparkles, lucideUsersRound, lucideBadgeCheck, lucideSparkles })],
  templateUrl: './tour-interest.component.html',
  styleUrl: './tour-interest.component.css',
})
export class TourInterestComponent {
  highlights: HighlightItem[] = [
    {
      icon: 'lucideTrendingUp',
      title: 'Mehr Reichweite',
      text: 'Erhoehen Sie Sichtbarkeit und Verweildauer mit interaktiven 360-Grad-Touren.',
      tone: 'from-orange-500 to-red-500',
    },
    {
      icon: 'lucideWandSparkles',
      title: 'KI-Boost',
      text: 'Nutzen Sie KI-Funktionen fuer bessere Bilder, smartere Inhalte und schnellere Veroeffentlichung.',
      tone: 'from-indigo-500 to-blue-500',
    },
    {
      icon: 'lucideUsersRound',
      title: 'Team Ready',
      text: 'Verteilen Sie Aufgaben im Team und liefern Sie professionell in kuerzester Zeit.',
      tone: 'from-emerald-500 to-teal-500',
    },
  ];
}
