import "./style.css";

function DropDownMenu(options) {
  let selected = "Select...";

  const menuEl = document.createElement("div");
  menuEl.classList.add("menu");

  function setSelected(id) {
    selected = options[id];
  }

  function render() {
    menuEl.innerHTML = `
      <div class="selected">${selected}</div>
      <ul class="options">
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
      menuEl.querySelector(".options").classList.add("visible");
    });

    menuEl.querySelectorAll(".option").forEach((option) => {
      option.addEventListener("click", () => {
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
