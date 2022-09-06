const toggleClock = document.querySelector("[data-clock-toggle]");
const toggleClockBtn = document.querySelector("[data-clock-indicator]");
const timeContainer = document.querySelector(".time-container");
const timeBtn = document.querySelector(".timeBtn.seen");

let hideClock = localStorage.getItem("hideTime");

// let hideTime = localStorage.getItem("hideTime") || "shown";

const disableClock = () => {
  timeContainer.classList.add("hiddenState");
  // hideTime ? timeContainer.classList.remove("hiddenState"): timeContainer.classList.add("hiddenState");
  // timeContainer.classList.toggle('asdf', hideTime)
  toggleClock.classList.add("slider-red-background");
  toggleClockBtn.classList.add("slider-off");
  localStorage.setItem("hideTime", "shown");
};
const enableClock = () => {
  timeContainer.classList.remove("hiddenState");
  toggleClock.classList.remove("slider-red-background");
  toggleClockBtn.classList.remove("slider-off");
  localStorage.setItem("hideTime", null);
};

if (hideClock === "shown") {
  disableClock();
}

toggleClock.addEventListener("click", () => {
  hideClock = localStorage.getItem("hideTime");
  if (hideClock !== "shown") {
    disableClock();
  } else {
    enableClock();
  }
});

const toggleFocus = document.querySelector("[data-focus-toggle]");
const toggleFocusBtn = document.querySelector("[data-focus-indicator]");
const focusTask = document.querySelector(".focus-task");

let hideFocus = localStorage.getItem("hideFocus");

const disableFocus = () => {
  toggleFocus.classList.toggle("slider-red-background");
  toggleFocusBtn.classList.toggle("slider-off");
  focusTitle.classList.toggle("hiddenState");
  focusTask.classList.toggle("hiddenState");
  localStorage.setItem("hideFocus", "shown");
};

const enableFocus = () => {
  toggleFocus.classList.toggle("slider-red-background");
  toggleFocusBtn.classList.toggle("slider-off");
  focusTitle.classList.toggle("hiddenState");
  focusTask.classList.toggle("hiddenState");
  localStorage.setItem("hideFocus", null);
};

if (hideFocus === "shown") {
  disableFocus();
}

toggleFocus.addEventListener("click", () => {
  hideFocus = localStorage.getItem("hideFocus");
  if (hideFocus !== "shown") {
    disableFocus();
  } else {
    enableFocus();
  }
});

const toggleGreeting = document.querySelector("[data-greeting-toggle]");
const toggleGreetingBtn = document.querySelector("[data-greeting-indicator]");
const greetingWithName = document.querySelector(".greeting-name");

let hideGreeting = localStorage.getItem("hideGreeting");

const disableGreeting = () => {
  toggleGreeting.classList.toggle("slider-red-background");
  toggleGreetingBtn.classList.toggle("slider-off");
  greetingWithName.classList.toggle("hiddenState");
  localStorage.setItem("hideGreeting", "shown");
};

const enableGreeting = () => {
  toggleGreeting.classList.toggle("slider-red-background");
  toggleGreetingBtn.classList.toggle("slider-off");
  greetingWithName.classList.toggle("hiddenState");
  localStorage.setItem("hideGreeting", null);
};

if (hideGreeting === "shown") {
  disableGreeting();
}

toggleGreeting.addEventListener("click", () => {
  hideGreeting = localStorage.getItem("hideGreeting");
  if (hideGreeting !== "shown") {
    disableGreeting();
  } else {
    enableGreeting();
  }
});

const toggleQuotes = document.querySelector("[data-quotes-toggle]");
const toggleQuotesBtn = document.querySelector("[data-quotes-indicator]");
const quotes = document.querySelector(".quotes");
const quoteContent = document.querySelector(".quote-content");
const quoteAuthor = document.querySelector(".quote-author");

let hideQuotes = localStorage.getItem("hideQuotes");

const disableQuotes = () => {
  toggleQuotes.classList.toggle("slider-red-background");
  toggleQuotesBtn.classList.toggle("slider-off");
  quotes.classList.toggle("hiddenState");
  localStorage.setItem("hideQuotes", "shown");
};

const enableQuotes = () => {
  toggleQuotes.classList.toggle("slider-red-background");
  toggleQuotesBtn.classList.toggle("slider-off");
  quotes.classList.toggle("hiddenState");
  localStorage.setItem("hideQuotes", null);
};

if (hideQuotes === "shown") {
  disableQuotes();
}

toggleQuotes.addEventListener("click", () => {
  hideQuotes = localStorage.getItem("hideQuotes");
  if (hideQuotes !== "shown") {
    disableQuotes();
  } else {
    enableQuotes();
  }
});

const toggleSocials = document.querySelector("[data-socials-toggle]");
const toggleSocialsBtn = document.querySelector("[data-socials-indicator]");
const socials = document.querySelector(".socials");

let hideSocials = localStorage.getItem("hideSocials");

const disableSocials = () => {
  toggleSocials.classList.toggle("slider-red-background");
  toggleSocialsBtn.classList.toggle("slider-off");
  socials.classList.toggle("hiddenState");
  localStorage.setItem("hideSocials", "shown");
};

const enableSocials = () => {
  toggleSocials.classList.toggle("slider-red-background");
  toggleSocialsBtn.classList.toggle("slider-off");
  socials.classList.toggle("hiddenState");
  localStorage.setItem("hideSocials", null);
};

if (hideSocials === "shown") {
  disableSocials();
}

toggleSocials.addEventListener("click", () => {
  hideSocials = localStorage.getItem("hideSocials");
  if (hideSocials !== "shown") {
    disableSocials();
  } else {
    enableSocials();
  }
});

const toggleTodo = document.querySelector("[data-todo-toggle]");
const toggleTodoBtn = document.querySelector("[data-todo-indicator]");
const toDo = document.querySelector(".toDo");

let hideTodo = localStorage.getItem("hideTodo");

const disableTodo = () => {
  toggleTodo.classList.toggle("slider-red-background");
  toggleTodoBtn.classList.toggle("slider-off");
  toDo.classList.toggle("hiddenState");
  localStorage.setItem("hideTodo", "shown");
};

const enableTodo = () => {
  toggleTodo.classList.toggle("slider-red-background");
  toggleTodoBtn.classList.toggle("slider-off");
  toDo.classList.toggle("hiddenState");
  localStorage.setItem("hideTodo", null);
};

if (hideTodo === "shown") {
  disableTodo();
}

toggleTodo.addEventListener("click", () => {
  hideTodo = localStorage.getItem("hideTodo");
  if (hideTodo !== "shown") {
    disableTodo();
  } else {
    enableTodo();
  }
});

export {
  toggleClock,
  toggleClockBtn,
  timeContainer,
  timeBtn,
  hideClock,
  toggleFocus,
  toggleFocusBtn,
  focusTask,
  hideFocus,
  toggleGreeting,
  toggleGreetingBtn,
  greetingWithName,
  hideGreeting,
  toggleQuotes,
  toggleQuotesBtn,
  quotes,
  quoteContent,
  quoteAuthor,
  hideQuotes,
  toggleSocials,
  toggleSocialsBtn,
  socials,
  hideSocials,
  toggleTodo,
  toggleTodoBtn,
  toDo,
  hideTodo,
  disableClock,
  disableFocus,
  disableGreeting,
  disableQuotes,
  disableSocials,
  disableTodo,
  enableClock,
  enableFocus,
  enableGreeting,
  enableQuotes,
  enableSocials,
  enableTodo,
};
