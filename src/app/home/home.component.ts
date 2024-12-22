import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div nz-row nz-flex [nzWrap]="'nowrap'">
      <div nz-col nzFlex="65px" class="aside">
        <app-sidebar></app-sidebar>
      </div>
      <div nz-col nzFlex="calc(100% - 65px)">
        <div class="main">
          <div nz-row class="navbar" style="margin-bottom: 15px;">
            <app-navbar style="width: 100%;"></app-navbar>
          </div>
          <div nz-row nz-flex [nzWrap]="'nowrap'" nzJustify="space-between">
            <div nz-col nzFlex="5" style=" min-width: 540px;">
              <div nz-row class="categories">
                <app-categories></app-categories>
              </div>
              <div nz-row [nzGutter]="[15, 15]" class="product-list">
                <app-product-card
                  nz-col
                  nzMd="12"
                  nzXl="8"
                  nzXXl="6"
                  *ngFor="let card of productCards"
                ></app-product-card>
              </div>
            </div>
            <div nz-col class="invoice">
              <app-invoice></app-invoice>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .layout-container {
        display: flex;
        height: 100svh;
      }
      .container {
        width: 100%;
        padding: 30px;

        background-color: #f9f8fb;
        height: 100svh;
        // overflow: hidden;
      }
      .main {
        height: 100svh;
        padding: 20px 30px;
        background-color: #f9f8fb;
        border-radius: 40px 0 0 40px;
        overflow: hidden;
        min-width: 380px;
      }
      .categories {
        width: 100%;
        overflow-x: auto;
      }
      .invoice {
        height: 85svh;
        margin-left: 20px;
        background-color: white;
        border-radius: 25px;
        padding: 20px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      }
      .product-list {
        padding-bottom: 150px;
        height: 100svh;
        overflow-y: auto;
      }
    `,
  ],
})
export class HomeComponent {
  title = 'coffee_pos';
  productCards = new Array(10).fill({});
}
