import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styles: [],
})
export class ProductsHeaderComponent implements OnInit {
  sort = 'desc';
  itemsCount = 12;
  @Output() columnsCountChange = new EventEmitter<number>();
  constructor() {}

  onSortChange(newSort: string): void {
    this.sort = newSort;
  }

  onItemsCountChange(count: number) {
    this.itemsCount = count;
  }
  onItemsViewChange(cols: number) {
    this.columnsCountChange.emit(cols);
  }
  ngOnInit(): void {}
}
