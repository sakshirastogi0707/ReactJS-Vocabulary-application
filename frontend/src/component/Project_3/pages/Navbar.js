import React from "react";
import "./style.css";
export default function Navbar() {
  return (
    <div class="nav">
      <input type="checkbox" id="nav-check" />
      <div class="nav-header">
        <div class="nav-title">JoGeek</div>
      </div>
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div class="nav-links">
        <a href="" target="_blank">
          Home
        </a>
        <a href="" target="_blank">
          About
        </a>
        <a href="" target="_blank">
          Service
        </a>
        <a href="" target="_blank">
          Menu
        </a>
        <a href="" target="_blank">
          koo
        </a>
      </div>
    </div>
  );
}
