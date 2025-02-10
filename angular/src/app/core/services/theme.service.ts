import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Theme } from '../models/theme.model';
import { effect } from '@angular/core';

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

   isLocalStorageAvailable(): boolean {
    try {
      return typeof localStorage !== 'undefined';
    } catch {
      return false;
    }
  }

  private loadTheme() {
    if (this.isLocalStorageAvailable()) {
      const theme = localStorage.getItem('theme');
      if (theme) {
        this.theme.set(JSON.parse(theme));
      }
    }
  }

  private setTheme() {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('theme', JSON.stringify(this.theme()));
    }
    this.setThemeClass();
  }

  public get isDark(): boolean {
    return this.theme().mode === 'dark';
  }

  private setThemeClass() {
    if (typeof window !== 'undefined' && document) {
      document.querySelector('html')!.className = this.theme().mode;
      document.querySelector('html')!.setAttribute('data-theme', this.theme().color);
    }
  }
  
}
