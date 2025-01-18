import { ElementRef } from '@angular/core';
import { ClickOutsideDirective } from './click-outside.directive';

describe('ClickOutsideDirective', () => {
  it('should create an instance', () => {
    const elementRef = { nativeElement: document.createElement('div') };
    const directive = new ClickOutsideDirective(elementRef as ElementRef, document);
    expect(directive).toBeTruthy();
  });
});
