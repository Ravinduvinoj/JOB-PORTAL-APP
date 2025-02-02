import { HttpClient } from '@angular/common/http';
import { Component, computed, Input, OnInit, signal } from '@angular/core';
import { TableFilterService } from '../../services/table-filter.service';
import { dummyData } from '../../../../../shared/dummy/user.dummy';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {
  selectAll: boolean = false;
  users = signal<User[]>([]);
  selectedUsers = new Map<number, boolean>();

  constructor(
    private http: HttpClient,
    private filterService: TableFilterService
  ) {}

  ngOnInit() {
    this.fetchUsers();
  }

  public toggle(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.selectAll = isChecked;
    this.selectAllCheckboxes(isChecked);
  }

  toggleSelectAll(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.selectAll = isChecked;
  }

  updateSelectAllState() {
    const allSelected = this.users().every((user) =>
      this.selectedUsers.get(user.id)
    );

    this.selectAll = allSelected;
    // Handle any indeterminate states if necessary
  }

  toggleUserSelection(userId: number, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.selectedUsers.set(userId, isChecked);

    // Update `selectAll` state
    this.updateSelectAllState();
  }

  selectAllCheckboxes(isChecked: boolean) {
    const checkboxes = document.querySelectorAll(
      'input[type="checkbox"][data-datatable-check]'
    );
    checkboxes.forEach((checkbox) => {
      (checkbox as HTMLInputElement).checked = isChecked;
    });
  }

  private fetchUsers() {
    this.http.get<User[]>('api/users').subscribe(
      (data) => this.users.set(data),
      (error) => {
        this.handleRequestError(error);
        this.users.set(dummyData);
      }
    );
  }

  onSearchChange(value: Event) {
    const input = value.target as HTMLInputElement;
    this.filterService.searchField.set(input.value);
  }

  onStatusChange(value: Event) {
    const selectElement = value.target as HTMLSelectElement;
    this.filterService.statusField.set(selectElement.value);
  }

  onOrderChange(value: Event) {
    const selectElement = value.target as HTMLSelectElement;
    this.filterService.orderField.set(selectElement.value);
  }

  private handleRequestError(error: any) {
    const msg =
      'An error occurred while fetching users. Loading dummy data as fallback.';
  }

  filteredUsers = computed(() => {
    const search = this.filterService.searchField().toLowerCase();
    const status = this.filterService.statusField();
    const order = this.filterService.orderField();

    return this.users()
      .filter(
        (user) =>
          user.name.toLowerCase().includes(search) ||
          user.username.toLowerCase().includes(search) ||
          user.email.toLowerCase().includes(search) ||
          user.phone.includes(search)
      )
      .filter((user) => {
        if (!status) return true;
        switch (status) {
          case '1':
            return user.status === 1;
          case '2':
            return user.status === 2;
          case '3':
          default:
            return true;
        }
      })
      .sort((a, b) => {
        const defaultNewest = !order || order === '1';
        if (defaultNewest) {
          return (
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );
        } else if (order === '2') {
          return (
            new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
          );
        }
        return 0;
      });
  });
}
