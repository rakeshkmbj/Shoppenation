import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategory } from '../../models';

@Component({
  selector: 'app-pos-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pos-sidebar.component.html',
  styleUrls: ['./pos-sidebar.component.scss']
})
export class PosSidebarComponent {
  @Input() categories: ProductCategory[] = [];
  @Input() selectedCategory: string = 'all';
  @Output() categorySelect = new EventEmitter<string>();

  activeNav: string = 'terminal';

  selectCategory(categoryId: string): void {
    this.categorySelect.emit(categoryId);
  }

  setActiveNav(nav: string): void {
    this.activeNav = nav;
  }
}
