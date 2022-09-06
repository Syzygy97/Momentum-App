const user = document.querySelector(".name");
const nameInput = document.getElementById("usersName");
const focusInput = document.querySelector("#focus");
const focusTitle = document.querySelector(".focus-title");
const boxCheck = document.querySelector("#squareBox");
const boxClose = document.querySelector("#squareBoxClose");
const editNameButton = document.querySelector(".editName");

nameInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && nameInput.value !== "") {
    user.innerText = `, ${nameInput.value}.`;
    nameInput.style.opacity = "0";
    nameInput.style.pointerEvents = "none";
    user.style.display = "inline-block";
    localStorage.setItem("name", `, ${nameInput.value}.`);
  }
});

editNameButton.addEventListener("click", () => {
  user.style.display = "none";
  editName();
});

function editName() {
  nameInput.style.opacity = "1";
  nameInput.style.pointerEvents = "auto";
  localStorage.removeItem("name");
}

function checkLocalStorageName() {
  if (localStorage.getItem("name") === "") {
    user.innerText = ".";
  }
  user.innerText = localStorage.getItem("name");
  nameInput.style.opacity = "0";
  nameInput.style.pointerEvents = "none";
}

focusInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    localStorage.setItem("focus", `${focusInput.innerText}`);
    focusInput.setAttribute("contenteditable", "false");
    focusInput.innerText = localStorage.getItem("focus");
    focusInput.style.borderBottom = "none";
    focusTitle.innerText = "TODAY";
    localStorage.setItem("focusTitle", `${focusTitle.innerText}`);
  }
});

function checkLocalStorageFocus() {
  if (localStorage.getItem("focus") === null) {
    focusTitle.innerText = "What is your focus today?";
  } else {
    focusInput.innerHTML = localStorage.getItem("focus");
    focusInput.setAttribute("contenteditable", "false");
    focusInput.style.borderBottom = "none";
    focusInput.style.textDecoration = localStorage.getItem("textDecoration");
    focusTitle.innerText = localStorage.getItem("focusTitle");
    squareBox.className =
      localStorage.getItem("checkbox") || "fa-regular fa-square";
  }
}

checkLocalStorageName();
checkLocalStorageFocus();

focusInput.addEventListener("db1click", (e) => {
  focusInput.setAttribute("contenteditable", "true");
  if (localStorage.getItem("focus") != focusInput.innerHTML) {
    localStorage.removeItem("focus");
    checkLocalStorageFocus();
  } else {
    focusInput.setAttribute("contenteditable", "false");
  }
});

boxClose.addEventListener("click", () => {
  deleteTask();
});
boxCheck.addEventListener("click", () => {
  swapClass();
});

function deleteTask() {
  localStorage.removeItem("focus");
  focusInput.setAttribute("contenteditable", "true");
  focusInput.innerText = "";
  focusInput.style.textDecoration = "none";
  focusInput.style.borderBottom = "3px solid white";
  squareBox.className = "fa-regular fa-square";
  focusTitle.textContent = "What is your focus today?";
  localStorage.setItem("textDecoration", "none");
  localStorage.setItem("checkbox", "fa-regular fa-square");
}

function swapClass() {
  if (squareBox.className === "fa-regular fa-square") {
    squareBox.className = "fa-regular fa-square-check";
    focusInput.style.textDecoration = "line-through";
    localStorage.setItem("textDecoration", "line-through");
    localStorage.setItem("checkbox", "fa-regular fa-square-check");
  } else {
    squareBox.className = "fa-regular fa-square";
    focusInput.style.textDecoration = "none";
    localStorage.setItem("textDecoration", "none");
    localStorage.setItem("checkbox", "fa-regular fa-square");
  }
}

export {
  user,
  nameInput,
  focusInput,
  focusTitle,
  boxCheck,
  boxClose,
  editName,
  checkLocalStorageFocus,
  checkLocalStorageName,
  deleteTask,
  swapClass,
};
