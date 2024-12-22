import { Component } from '@angular/core';

@Component({
  selector: 'app-order-card',
  template: `
    <div class="item-details" nz-flex nzAlign="center" nzGap="10px">
      <img
        src="https://images.unsplash.com/photo-1553742198-6eea5ac42a24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA=="
        alt="Espresso"
      />
      <div class="text">
        <p>Espresso</p>
        <span>$2.6</span>
      </div>
    </div>

    <div class="quantity-controls" nz-flex nzAlign="center" nzGap="10px">
      <button class="circle-button" aria-label="Decrease quantity">
        <mat-icon class="material-icons-outlined">remove</mat-icon>
      </button>
      <span class="quantity">1</span>
      <button class="circle-button" aria-label="Increase quantity">
        <mat-icon class="material-icons-outlined">add</mat-icon>
      </button>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      $primary-color: #ee8a2f;
      $font-size: 16px;
      $font-weight-normal: 500;
      $font-weight-bold: bold;

      .item-details {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
      }

      .item-details img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 10px;
      }

      .text p {
        font-size: $font-size;
        font-weight: $font-weight-normal;
        margin: 0;
      }

      .text span {
        font-size: $font-size;
        font-weight: $font-weight-bold;
      }

      .quantity-controls {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .quantity {
        font-size: $font-size;
        font-weight: $font-weight-normal;
      }

      .circle-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: 2px solid $primary-color;
        border-radius: 50%;
        background-color: transparent;
        width: 30px;
        height: 30px;
        transition: background-color 0.3s, border-color 0.3s;
      }

      .circle-button:hover {
        background-color: $primary-color;
      }

      .circle-button:hover .mat-icon {
        color: white;
      }

      .circle-button .mat-icon {
        color: $primary-color;
      }
    `,
  ],
})
export class OrderCardComponent {}
