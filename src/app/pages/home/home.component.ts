import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  cols = 1;
  onColumnsCountChange(cols: number) {
    this.cols = cols;
  }
}
