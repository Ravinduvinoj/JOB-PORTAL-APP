import { Component, Input } from '@angular/core';
import { User } from '../../../model/user.model';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrl: './table-row.component.css'
})
export class TableRowComponent {
  @Input() user: User = <User>{};
}
