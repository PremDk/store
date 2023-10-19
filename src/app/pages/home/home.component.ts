import { Component } from '@angular/core';

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 355, 4: 350 };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  cols = 1;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;

  onColumnsCountChange(cols: number) {
    this.cols = cols;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }
  onShowCategory(category: string) {
    this.category = category;
  }
}
