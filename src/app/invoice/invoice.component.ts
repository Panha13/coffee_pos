import { Component } from '@angular/core';

@Component({
  selector: 'app-invoice',
  template: `
    <div
      class="order-container"
      nz-flex
      [nzVertical]="true"
      nzGap="15px"
      nzJustify="space-between"
    >
      <div
        class="order-header"
        nz-flex
        nzJustify="space-between"
        nzAlign="center"
      >
        <h2>Order #2156</h2>
        <button class="clear-button">Clear All</button>
      </div>
      <div class="order-list" nz-flex [nzVertical]="true" nzGap="15px">
        <app-order-card *ngFor="let order of orderCards"></app-order-card>
      </div>
      <div
        class="order-summary"
        nz-flex
        [nzVertical]="true"
        nzJustify="space-between"
      >
        <div class="summary-details" nz-flex [nzVertical]="true" nzGap="5px">
          <div class="summary-item">
            <p>Subtotal</p>
            <p>$11.8</p>
          </div>
          <div class="summary-item discount">
            <p>Discount price</p>
            <p>$0</p>
          </div>
          <div class="summary-item tax">
            <p>Tax</p>
            <p>$4.99</p>
          </div>
        </div>
        <div class="summary-divider">
          <span></span>
          <hr />
          <span></span>
        </div>
        <div class="summary-total">
          <p>Total</p>
          <p>$16.79</p>
        </div>
      </div>
      <button class="print-button">Print bills</button>
    </div>
  `,
  styles: [
    `
      .order-container {
        display: flex;
        flex-direction: column;
        gap: 15px;
        justify-content: space-between;
        width: 350px;
        height: 100%;
      }

      .order-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2 {
          margin: 0;
          font-size: 18px;
          font-weight: 700;
        }

        .clear-button {
          padding: 0;
          border: none;
          background-color: transparent;
          cursor: pointer;
        }
      }

      .order-list {
        display: flex;
        flex-direction: column;
        gap: 15px;
        height: 100%;
        overflow-y: auto;
      }

      .order-summary {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 350px;
        background-color: #f9f9f9;
        border-radius: 15px;
        padding: 20px 30px;

        .summary-details {
          display: flex;
          flex-direction: column;
          gap: 5px;

          .summary-item {
            display: flex;
            justify-content: space-between;
            font-size: 15px;
            font-weight: bold;

            &.discount,
            &.tax {
              font-weight: 500;
              color: #757575;
            }

            p {
              margin: 0;
            }
          }
        }

        .summary-divider {
          display: flex;
          justify-content: space-between;
          margin: 0 -40px;

          span {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background-color: white;
          }

          hr {
            flex-grow: 1;
            align-self: center;
            border: none;
            height: 1.5px;
            background: #757575;
            opacity: 0.3;
            background: repeating-linear-gradient(
              90deg,
              #757575,
              #757575 12px,
              transparent 6px,
              transparent 20px
            );
          }
        }

        .summary-total {
          display: flex;
          justify-content: space-between;
          font-size: 18px;
          font-weight: bold;

          p {
            margin: 0;
          }
        }
      }

      .print-button {
        background-color: black;
        width: 100%;
        color: white;
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
      }
    `,
  ],
})
export class InvoiceComponent {
  orderCards = new Array(4).fill({});
}
