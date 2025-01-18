import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Theme } from '../models/theme.model';
import { effect } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public theme = signal<Theme>({ mode: 'dark', color: 'base' });

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.loadTheme();
    effect(() => {
      this.setTheme();
    });
  }

  private isLocalStorageAvailable(): boolean {
    try {
      return typeof localStorage !== 'undefined';
    } catch {
      return false;
    }
  }

  loadTheme() {
    if (this.isLocalStorageAvailable()) {
      const theme = localStorage.getItem('theme');
      if (theme) {
        this.theme.set(JSON.parse(theme));
      }
    }
  }

  setTheme() {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('theme', JSON.stringify(this.theme()));
    }
    this.setThemeClass();
  }

  public get isDark(): boolean {
    return this.theme().mode === 'dark';
  }

  setThemeClass() {
    if (isPlatformBrowser(this.platformId)) {
      const htmlElement = document.querySelector('html');
      if (htmlElement) {
        htmlElement.className = this.theme().mode;
        htmlElement.setAttribute('data-theme', this.theme().color);
      }
    }
  }
}
