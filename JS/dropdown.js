const todoButton = document.querySelector(".toDoBtn");
const todoMenu = document.querySelector(".todo-menu");

document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

  let current;
  if (isDropdownButton) {
    current = e.target.closest("[data-dropdown]");
    current.classList.toggle("active");
  }
  document.querySelectorAll("[data-dropdown].active").forEach((settings) => {
    if (settings === current) return;
    settings.classList.remove("active");
  });
});

todoButton.addEventListener("click", showTodo);

function showTodo() {
  if (todoMenu.style.opacity === "1") {
    todoMenu.style.opacity = "0";
    todoMenu.style.pointerEvents = "none";
  } else {
    todoMenu.style.opacity = "1";
    todoMenu.style.pointerEvents = "auto";
  }
}

export { todoButton, todoMenu, showTodo };
