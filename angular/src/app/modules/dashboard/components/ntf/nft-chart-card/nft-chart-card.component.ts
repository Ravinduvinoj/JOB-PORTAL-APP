import {
  Component,
  effect,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
// import { ChartOptions } from '../../../../../shared/models/chart-options';
import { ThemeService } from '../../../../../core/services/theme.service';

@Component({
  selector: '[nft-chart-card]',
  templateUrl: './nft-chart-card.component.html',
  styleUrl: './nft-chart-card.component.css',
})
export class NftChartCardComponent implements OnInit, OnDestroy {
  // public chartOptions: Partial<ChartOptions>;
  private isBrowser: boolean | undefined;
  primaryColor="";

  constructor(
    private themeService: ThemeService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    let baseColor = '#FFFFFF';
    const data = [
      2100, 3200, 3200, 2400, 2400, 1800, 1800, 2400, 2400, 3200, 3200, 3000,
      3000, 3250, 3250,
    ];
    const categories = [
      '10AM',
      '10.30AM',
      '11AM',
      '11.15AM',
      '11.30AM',
      '12PM',
      '1PM',
      '2PM',
      '3PM',
      '4PM',
      '5PM',
      '6PM',
      '7PM',
      '8PM',
      '9PM',
    ];

    // Only access getComputedStyle if in the browser
    if (this.isBrowser) {
      const bodyStyles = getComputedStyle(document.body);
      baseColor = bodyStyles.getPropertyValue('--primary-color') || baseColor;
    }
   

    // this.chartOptions = {
    //   series: [{ name: 'Etherium', data: data }],
    //   chart: {
    //     fontFamily: 'inherit',
    //     type: 'area',
    //     height: 150,
    //     toolbar: { show: false },
    //     sparkline: { enabled: true },
    //   },
    //   dataLabels: {
    //     enabled: false,
    //   },
    //   fill: {
    //     type: 'gradient',
    //     gradient: {
    //       shadeIntensity: 1,
    //       opacityFrom: 0.4,
    //       opacityTo: 0.2,
    //       stops: [15, 120, 100],
    //     },
    //   },
    //   stroke: {
    //     curve: 'smooth',
    //     show: true,
    //     width: 3,
    //     colors: [baseColor], // line color
    //   },
    //   xaxis: {
    //     categories: categories,
    //     labels: {
    //       show: false,
    //     },
    //     crosshairs: {
    //       position: 'front',
    //       stroke: {
    //         color: baseColor,
    //         width: 1,
    //         dashArray: 4,
    //       },
    //     },
    //     tooltip: {
    //       enabled: true,
    //     },
    //   },
    //   tooltip: {
    //     theme: 'light',
    //     y: {
    //       formatter: function (val: number) {
    //         return val + '$';
    //       },
    //     },
    //   },
    //   colors: [baseColor], //line colors
    // };

    // Apply dynamic theme updates (browser-only)
    if (this.isBrowser) {
      // effect(() => {
      //   /** change chart theme */
      //   this.primaryColor = getComputedStyle(
      //     document.documentElement
      //   ).getPropertyValue('--primary');
      //   this.primaryColor = this.HSLToHex(this.primaryColor);
      //   this.chartOptions.tooltip = {
      //     theme: this.themeService.theme().mode,
      //   };
      //   console.log(this.primaryColor)
      //   this.chartOptions.colors = [this.primaryColor];
      //   this.chartOptions.stroke!.colors = [this.primaryColor];
      //   this.chartOptions.xaxis!.crosshairs!.stroke!.color = this.primaryColor;
      // });
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

  ngOnInit(): void {

  }

  ngOnDestroy(): void {}
}
