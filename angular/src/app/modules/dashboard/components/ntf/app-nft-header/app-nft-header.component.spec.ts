import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNftHeaderComponent } from './app-nft-header.component';

describe('AppNftHeaderComponent', () => {
  let component: AppNftHeaderComponent;
  let fixture: ComponentFixture<AppNftHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppNftHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppNftHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
