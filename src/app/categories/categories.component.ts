import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  template: `
    <div class="category">
      <ul class="category-list">
        <li class="active">All</li>
        <li>Espresso</li>
        <li>Cappuccino</li>
        <li>Latte</li>
        <li>Mocha</li>
        <li>Machiato</li>
      </ul>
    </div>
  `,
  styles: [
    `
      .category-list {
        list-style: none;
        display: flex;
        gap: 5px;
      }
      .category-list li {
        padding: 10px 15px;
        border-radius: 10px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }
      .category-list li:not(.active):hover {
        background-color: #eee;
      }

      .active {
        background-color: black;
        color: white;
        border-radius: 10px;
      }
    `,
  ],
})
export class CategoriesComponent {}
