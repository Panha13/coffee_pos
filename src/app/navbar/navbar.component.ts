import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <div nz-row nz-flex [nzWrap]="'nowrap'">
      <div nz-col nzFlex="5" style="min-width: 570px;">
        <div nz-flex nzAlign="center" nzJustify="start">
          <h1 class="logo">Coffee</h1>
          <div class="input-container">
            <input type="text" placeholder="Search for Coffee, food etc" />
            <i class="material-icons">search</i>
            <!-- Icon placeholder -->
          </div>
        </div>
      </div>

      <div nz-col nzFlex="3">
        <div nz-flex nzAlign="center" nzGap="10px" nzJustify="end">
          <div class="icon-tag">
            <mat-icon class="material-icons-outlined"
              >confirmation_number</mat-icon
            >
          </div>
          <div class="icon-tag">
            <mat-icon class="material-icons-outlined">auto_graph</mat-icon>
          </div>
          <div class="icon-tag">
            <mat-icon class="material-icons-outlined">settings</mat-icon>
          </div>
          <div class="profile">
            <div class="icon-tag">
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <p style="display: flex; flex-wrap: nowrap;">
              Cashier
              <mat-icon style="vertical-align: middle; "
                >keyboard_arrow_down</mat-icon
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .logo {
        cursor: pointer;
        margin: 0;
        font-weight: bold;
      }
      .input-container {
        width: 100%;
        position: relative;
        display: inline-block;
        margin: 0 40px;
      }

      .input-container input {
        width: 100%;
        padding: 15px 40px 15px 15px; /* Adjust the padding to make space for the icon */
        border: none;
        border-radius: 15px;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
      }

      .input-container i {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        color: #888; /* Adjust icon color as needed */
      }

      .icon-tag {
        overflow: hidden;
        width: 45px;
        height: 45px;
        border-radius: 100%;
        background-color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
        cursor: pointer;
      }

      .icon-tag img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }

      .profile {
        color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        height: auto;
        gap: 12px; /* Adjust height as needed */
      }
      .profile p {
        font-weight: 500;
        margin: 0;
        color: #757575;
        font-size: 14px;
        cursor: pointer;
      }
    `,
  ],
})
export class NavbarComponent {}
