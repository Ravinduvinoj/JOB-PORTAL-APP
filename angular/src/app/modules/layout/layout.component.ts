import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, Event} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  private mainContent: HTMLElement | null = null;

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: object) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (this.mainContent) {
          this.mainContent.scrollTop = 0;
        }
      }
    });
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Only run this in the browser (not SSR)
      this.mainContent = document.getElementById('main-content');
    }
  }
}
