import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrl: './table-header.component.css'
})
export class TableHeaderComponent {
  selectAll: boolean = false;
  
  @Output() onCheck = new EventEmitter<boolean>();

  public toggle(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.selectAll = isChecked;
    this.selectAllCheckboxes(isChecked);
  }

  selectAllCheckboxes(isChecked: boolean) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"][data-datatable-check]');
    checkboxes.forEach((checkbox) => {
      (checkbox as HTMLInputElement).checked = isChecked;
    });
  }
}
