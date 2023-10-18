import DropDownMenu from "./DropDownMenu.js";

const menu = DropDownMenu([
  "New Jersey",
  "Massachusetts",
  "Maine",
  "Nebraska",
  "Nevada",
]);
menu.render();

document.body.appendChild(menu.menuEl);
