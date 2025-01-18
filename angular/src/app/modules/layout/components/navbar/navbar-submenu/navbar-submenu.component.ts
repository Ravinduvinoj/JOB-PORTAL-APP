import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { SubMenuItem } from '../../../../../core/models/menu.model';

@Component({
  selector: 'app-navbar-submenu',
  templateUrl: './navbar-submenu.component.html',
  styleUrl: './navbar-submenu.component.css'
})
export class NavbarSubmenuComponent {
  @Input() public submenu: SubMenuItem[] = [];
  @ViewChild('submenuRef', { static: true }) submenuRef!: ElementRef<HTMLDivElement>;

  constructor() {}

  ngAfterViewInit() {
    /**
     * check if component is out of the screen
     */
    if (this.submenuRef && this.submenuRef.nativeElement) {
      const submenu = this.submenuRef.nativeElement.getBoundingClientRect();
      const bounding = document.body.getBoundingClientRect();

      if (submenu.right > bounding.right) {
        const childrenElement = this.submenuRef.nativeElement.parentNode as HTMLElement;
        if (childrenElement) {
          childrenElement.style.left = '-100%';
        }
      }
    }
  }
}
