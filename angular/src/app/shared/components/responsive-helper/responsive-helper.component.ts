import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-responsive-helper',
  templateUrl: './responsive-helper.component.html',
  styleUrl: './responsive-helper.component.css'
})
export class ResponsiveHelperComponent {
  public env: any = environment;

  constructor() {}

  ngOnInit(): void {}
}
