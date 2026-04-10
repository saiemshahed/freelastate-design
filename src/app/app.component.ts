import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideBell,
  lucideChevronDown,
  lucideChevronRight,
  lucideCreditCard,
  lucideLayoutDashboard,
  lucideLogOut,
  lucideMap,
  lucideMenu,
  lucideSettings,
  lucideUser,
  lucideUserCog,
  lucideVideo,
  lucideX,
} from '@ng-icons/lucide';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, NgIcon],
  providers: [
    provideIcons({
      lucideLayoutDashboard,
      lucideMap,
      lucideVideo,
      lucideSettings,
      lucideUser,
      lucideChevronRight,
      lucideMenu,
      lucideX,
      lucideBell,
      lucideChevronDown,
      lucideUserCog,
      lucideCreditCard,
      lucideLogOut,
    }),
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  sidebarOpen = false;
  userMenuOpen = false;

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }

  toggleUserMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.userMenuOpen = !this.userMenuOpen;
  }

  @HostListener('document:click')
  closeUserMenu(): void {
    this.userMenuOpen = false;
  }

  @HostListener('document:keydown.escape')
  closeUserMenuOnEscape(): void {
    this.userMenuOpen = false;
  }
}
