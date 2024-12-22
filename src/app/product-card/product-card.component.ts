import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  template: `
    <div class="product-card">
      <div class="product-header">
        <div class="product-image">
          <img
            src="https://images.unsplash.com/photo-1553742198-6eea5ac42a24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="espresso"
          />
        </div>
        <button class="add-to-cart">
          <mat-icon class="material-icons-outlined">shopping_cart</mat-icon>
        </button>
      </div>

      <div class="product-details">
        <h2 class="product-title">Espresso</h2>
        <h2 class="product-price">$2.6</h2>
      </div>
      <div class="product-sizes">
        <ul class="size-list">
          <li class="size-item">
            <div class="size-icon active">
              <img
                src="../../assets/cup.svg"
                alt="Small"
                style="width: 28px;"
              />
            </div>
            <span>S</span>
          </li>
          <li class="size-item">
            <div class="size-icon">
              <img
                src="../../assets/cup.svg"
                alt="Medium"
                style="width: 28px;"
              />
            </div>
            <span>M</span>
          </li>
          <li class="size-item">
            <div class="size-icon">
              <img
                src="../../assets/cup.svg"
                alt="Large"
                style="width: 28px;"
              />
            </div>
            <span>L</span>
          </li>
          <li class="size-item">
            <div class="size-icon">
              <img
                src="../../assets/cup.svg"
                alt="Extra Large"
                style="width: 28px;"
              />
            </div>
            <span>XL</span>
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [
    `
      .product-card {
        position: relative;
        background-color: white;
        padding: 15px;
        border-radius: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      .product-header {
        position: relative;
      }

      .product-image {
        border-radius: 20px;
        overflow: hidden;
        height: 150px;
        margin-bottom: 15px;
      }

      .product-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }

      .product-image:hover img {
        transform: scale(1.1);
      }

      .add-to-cart {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #ee8a2f;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: -10px;
        right: -10px;
        border: none;
        outline: none;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.2s ease,
          box-shadow 0.2s ease;
      }

      .add-to-cart:hover {
        background-color: #ff9933; /* Lighter shade for hover */
        transform: scale(1.1); /* Slightly scale up on hover */
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3); /* Add a subtle shadow on hover */
      }

      .product-details {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
      }

      .product-title,
      .product-price {
        font-weight: bold;
        font-size: 18px;
      }

      .product-sizes {
        overflow-x: auto;
      }

      .size-list {
        display: flex;
        gap: 5px;
        list-style-type: none;
        padding: 0;
        margin: 0;
      }

      .size-item {
        text-align: center;
        cursor: pointer;
      }

      .size-icon {
        padding: 10px;
        margin-bottom: 5px;
        background-color: #f9f9f9;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      .size-icon:hover {
        background-color: #eee;
      }

      .active {
        background-color: #fce8d5 !important;
      }
    `,
  ],
})
export class ProductCardComponent {}
