import { Component, Input } from '@angular/core';
import { Nft } from '../../../models/nft';

@Component({
  selector: '[nft-dual-card]',
  templateUrl: './nft-dual-card.component.html',
  styleUrl: './nft-dual-card.component.css'
})
export class NftDualCardComponent {
  @Input() nft: Nft = <Nft>{};

  constructor() {}

  ngOnInit(): void {}
}
