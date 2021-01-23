import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  public count = 4;

  public updateCount(adjustment = 1): void {
    this.count += adjustment;
  }

  public async updateCountAsync(adjustment = 1): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 4000));
    this.count += adjustment;
  }
}
