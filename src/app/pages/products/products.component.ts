import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChartBar, lucideDownload, lucideMonitor, lucidePencil, lucidePlus, lucideTarget } from '@ng-icons/lucide';

type ProductItem = {
  id: number;
  title: string;
  img: string;
  size: string;
  date: string;
};

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, NgIcon],
  providers: [provideIcons({ lucidePlus, lucideTarget, lucideMonitor, lucidePencil, lucideDownload, lucideChartBar })],
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  constructor(private router: Router) {}

  readonly imgs = [
    'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800',
  ];

  readonly items: ProductItem[] = Array.from({ length: 9 }).map((_, i) => ({
    id: i + 1,
    title: ['Robby Testing', 'Neue Version', 'test editor', 'Gewoba Hollergrund'][i % 4],
    img: this.imgs[i % 3],
    size: ['11 MB', '3 GB', '38 MB', '88 MB', '102 MB'][i % 5],
    date: `2026-03-${String(31 - i).padStart(2, '0')}`,
  }));

  goToDetails(id: number): void {
    this.router.navigate(['/products', id]);
  }
}
