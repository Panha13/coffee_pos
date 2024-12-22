import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
    <div class="aside">
      <div class="icon-logo">
        <mat-icon>sort</mat-icon>
      </div>
      <ul class="menu-inner">
        <li class="menu-item">
          <a href="#">Coffee</a>
        </li>
        <li class="menu-item">
          <a href="#">Tea</a>
        </li>
        <li class="menu-item">
          <a href="#">Juice</a>
        </li>
        <li class="menu-item">
          <a href="#">Meal</a>
        </li>
        <li class="menu-item">
          <a href="#">Snack</a>
        </li>
        <li class="menu-item">
          <a href="#">Dessert</a>
        </li>
      </ul>
    </div>
  `,
  styles: [
    `
      .aside {
        height: 100%;
        width: auto;
        background-color: #251f1f;
        color: white;
        display: flex;
        align-content: center;
        justify-content: center;
        flex-direction: column;
      }
      .menu-inner {
        list-style: none;
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: center;
        writing-mode: vertical-lr;
        transform: rotate(180deg);
      }

      .menu-item {
        padding: 20px;
        transition: all 0.3s ease;
      }

      .menu-item:hover {
        transform: translateY(-2px);
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
      }

      .menu-item > a {
        text-decoration: none;
        color: white;
      }
      .icon-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 35px;
      }
    `,
  ],
})
export class SidebarComponent {}
