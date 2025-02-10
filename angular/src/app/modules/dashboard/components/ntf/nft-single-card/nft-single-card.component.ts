import { Component, Input, OnInit } from '@angular/core';
import { Nft } from '../../../models/nft';

@Component({
  selector: '[nft-single-card]',
  templateUrl: './nft-single-card.component.html',
  styleUrl: './nft-single-card.component.css'
})
export class NftSingleCardComponent implements OnInit{
  @Input() nft: Nft = <Nft>{};

  constructor() {}

  ngOnInit(): void {}
}
