import { time, showTime, addZero } from "./time.js";

import {
  quoteText,
  quoteBtn,
  authorName,
  soundBtn,
  quotesListener,
  playSound,
  randomQuote,
} from "./quotes.js";

import {
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
} from "./nameFocus.js";

// editName();
// deleteTask();
// swapClass();
// checkLocalStorageName();
// checkLocalStorageFocus();

import { greeting, bgChange } from "./bgChange.js";

import { todoButton, todoMenu, showTodo } from "./dropdown.js";

import {
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
} from "./toggleSlider.js";

import {
  listsContainer,
  newListForm,
  newListInput,
  deleteListButton,
  taskContainer,
  listTitle,
  taskCount,
  tasksList,
  taskTemplate,
  newTaskForm,
  newTaskInput,
  clearCompletedTaskButton,
  localStorageListKey,
  localStorageSelectedListIdKey,
  lists,
  selectedListId,
  createList,
  createTask,
  saveAndShow,
  save,
  show,
  showTasks,
  showTaskCount,
  showLists,
  clearElement,
} from "./todo.js";
