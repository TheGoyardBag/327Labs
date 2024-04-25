// File: /js/dropdown-menu.js

const template = document.createElement("template");
template.innerHTML = `
  <style>
    .dropdown {
      position: relative;
      display: inline-block;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: white;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
    }

    .dropdown-content a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }

    .dropdown-content a:hover {
      background-color: lightgray;
    }
  </style>
  
  <div class="dropdown">
    <button class="dropbtn">Dropdown Menu</button>
    <div class="dropdown-content">
      <slot></slot> <!-- Allows insertion of content -->
    </div>
  </div>
`;

class DropdownMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).appendChild(template.content.cloneNode(true));

    const button = this.shadowRoot.querySelector(".dropbtn");
    const dropdownContent = this.shadowRoot.querySelector(".dropdown-content");

    button.addEventListener("click", () => {
      const isVisible = dropdownContent.style.display === "block";
      dropdownContent.style.display = isVisible ? "none" : "block";
    });
  }
}

customElements.define("dropdown-menu", DropdownMenu);
