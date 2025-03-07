import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Nft } from '../../models/nft';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrl: './nft.component.css'
})
export class NftComponent implements OnInit{
  nft: Array<Nft>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.nft = [
      {
        id: 34356771,
        title: 'Girls of the Cartoon Universe',
        creator: 'Jhon Doe',
        instant_price: 4.2,
        price: 187.47,
        ending_in: '06h 52m 47s',
        last_bid: 0.12,
        image: './assets/images/img-01.jpg',
        avatar: './assets/avatars/avt-01.jpg',
      },
      {
        id: 34356772,
        title: 'Pupaks',
        price: 548.79,
        last_bid: 0.35,
        image: './assets/images/img-02.jpg',
      },
      {
        id: 34356773,
        title: 'Seeing Green collection',
        price: 234.88,
        last_bid: 0.15,
        image: './assets/images/img-03.jpg',
      },
    ];
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Your code that uses the window object
      console.log(window.location.href);
    }
  }
}
