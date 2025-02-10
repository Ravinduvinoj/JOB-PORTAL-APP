import {
  Component,
  effect,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { Nft } from '../../../models/nft';
import { isPlatformBrowser } from '@angular/common';
import { ThemeService } from '../../../../../core/services/theme.service';

@Component({
  selector: '[nft-dual-card]',
  templateUrl: './nft-dual-card.component.html',
  styleUrl: './nft-dual-card.component.css',
})
export class NftDualCardComponent implements OnInit, OnDestroy {
  @Input() nft: Nft = <Nft>{};
  private isBrowser: boolean | undefined;
  primaryColor="";

  constructor(
    private themeService: ThemeService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    let baseColor = '#FFFFFF';
    // Only access getComputedStyle if in the browser
    if (this.isBrowser) {
      const bodyStyles = getComputedStyle(document.body);
      baseColor = bodyStyles.getPropertyValue('--primary-color') || baseColor;
    }

    // Apply dynamic theme updates (browser-only)
    if (this.isBrowser) {
      effect(() => {
        /** change chart theme */
        this.primaryColor = getComputedStyle(
          document.documentElement
        ).getPropertyValue('--primary');
        this.primaryColor = this.HSLToHex(this.primaryColor);
        theme: this.themeService.theme().mode;
        console.log(this.primaryColor);
      });
    }
  }

  private HSLToHex(color: string): string {
    const colorArray = color.split('%').join('').split(' ');
    const colorHSL = colorArray.map(Number);
    const hsl = {
      h: colorHSL[0],
      s: colorHSL[1],
      l: colorHSL[2],
    };

    const { h, s, l } = hsl;

    const hDecimal = l / 100;
    const a = (s * Math.min(hDecimal, 1 - hDecimal)) / 100;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = hDecimal - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

      // Convert to Hex and prefix with "0" if required
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, '0');
    };

    return `#${f(0)}${f(8)}${f(4)}`;
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
