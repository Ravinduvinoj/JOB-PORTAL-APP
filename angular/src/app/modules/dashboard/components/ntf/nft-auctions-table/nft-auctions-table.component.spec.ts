import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftAuctionsTableComponent } from './nft-auctions-table.component';

describe('NftAuctionsTableComponent', () => {
  let component: NftAuctionsTableComponent;
  let fixture: ComponentFixture<NftAuctionsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NftAuctionsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NftAuctionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
