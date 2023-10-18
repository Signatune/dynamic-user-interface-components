import "./style.css";

function DropDownMenu(options) {
  let selected = "Select...";
  let expanded = false;

  const menuEl = document.createElement("div");
  menuEl.classList.add("menu");

  function setSelected(id) {
    selected = options[id];
  }

  function render() {
    menuEl.innerHTML = `
      <div class="selected">${selected}</div>
      <ul class="options ${expanded ? "visible" : ""}">
        ${options
          .map((option, index) => {
            if (option !== selected) {
              return `<li id="${index}" class="option">${option}</li>`;
            }

            return `<li id="${index}" class="option">${option} ✓</li>`;
          })
          .join("")}
      </ul>
    `;

    menuEl.querySelector(".selected").addEventListener("click", () => {
      expanded = !expanded;
      render();
    });

    menuEl.querySelectorAll(".option").forEach((option) => {
      option.addEventListener("click", () => {
        expanded = false;
        setSelected(option.id);
        render();
      });
    });
  }

  return {
    menuEl,
    render,
  };
}

export default DropDownMenu;
