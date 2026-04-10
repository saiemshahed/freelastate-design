import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideArrowDownToLine,
  lucideArrowUpDown,
  lucideCheck,
  lucideChevronDown,
  lucideEyeOff,
  lucideGlobe,
  lucideImage,
  lucideInfo,
  lucideLayoutTemplate,
  lucideLink2,
  lucideMap,
  lucideMaximize,
  lucideMenu,
  lucideMonitor,
  lucideMove,
  lucidePencil,
  lucideSettings,
  lucideShare2,
  lucideSquareCheck,
  lucideSquare,
  lucideTrash2,
  lucideUpload,
  lucideUsers,
  lucideVideo,
  lucideWandSparkles,
  lucideX,
} from '@ng-icons/lucide';

type UploadImage = { id: number; name: string; thumb: string };
type MenuItem = { title: string; icon: string };
type SettingCheckbox = { label: string; checked: boolean };

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, NgIcon],
  providers: [
    provideIcons({
      lucideMenu,
      lucideX,
      lucideMonitor,
      lucideSettings,
      lucideUpload,
      lucideArrowUpDown,
      lucideEyeOff,
      lucideLayoutTemplate,
      lucideMap,
      lucideInfo,
      lucideLink2,
      lucideShare2,
      lucideUsers,
      lucideGlobe,
      lucideVideo,
      lucideWandSparkles,
      lucideChevronDown,
      lucideSquareCheck,
      lucideSquare,
      lucideImage,
      lucideTrash2,
      lucideArrowDownToLine,
      lucidePencil,
      lucideMove,
      lucideMaximize,
      lucideCheck,
    }),
  ],
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent {
  readonly id: string | null;
  activeTab = 'Toureinstellungen';
  isEditorMenuOpen = false;
  previewImage: UploadImage | null = null;

  readonly menuItems: MenuItem[] = [
    { title: 'Toureinstellungen', icon: 'lucideSettings' },
    { title: 'Upload', icon: 'lucideUpload' },
    { title: 'Sortieren', icon: 'lucideArrowUpDown' },
    { title: 'Verpixeln', icon: 'lucideEyeOff' },
    { title: 'Bereiche', icon: 'lucideLayoutTemplate' },
    { title: 'Grundrissplaene', icon: 'lucideMap' },
    { title: 'Info-Inhalte', icon: 'lucideInfo' },
    { title: 'Verknuepfen', icon: 'lucideLink2' },
    { title: 'Freigabe', icon: 'lucideShare2' },
    { title: 'Kundenverwaltung', icon: 'lucideUsers' },
    { title: 'Veroeffentlichen', icon: 'lucideGlobe' },
    { title: 'Sichtbeschraenkung', icon: 'lucideEyeOff' },
    { title: 'AI Video', icon: 'lucideVideo' },
    { title: 'AI Grundriss (BETA)', icon: 'lucideMap' },
    { title: 'KI-Bildverbesserung (BETA)', icon: 'lucideWandSparkles' },
  ];

  readonly settingsCheckboxes: SettingCheckbox[] = [
    { label: 'Panoramen automatisch langsam drehen', checked: true },
    { label: 'Zoom zulassen', checked: false },
    { label: 'Widerrufserklaerung vorschalten', checked: false },
    { label: 'Willkommenspopup anzeigen', checked: true },
    { label: 'Social Media Buttons anzeigen', checked: true },
    { label: 'Virtual Reality zulassen', checked: true },
    { label: 'Vermessung aktivieren', checked: false },
  ];

  readonly uploadedImages: UploadImage[] = [
    {
      id: 1,
      name: 'R0010002.JPG',
      thumb: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: 2,
      name: '360_edited.jpg',
      thumb: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200',
    },
  ];

  constructor(route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id');
  }

  selectTab(tab: string | MenuItem): void {
    this.activeTab = typeof tab === 'string' ? tab : tab.title;
    this.isEditorMenuOpen = false;
  }
}
