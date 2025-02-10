import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
   constructor(
      private themeService: ThemeService,
    ){
      
    }
  ngOnInit(): void {
    console.log(this.themeService.theme().mode)
  }
}
