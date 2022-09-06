const greeting = document.querySelector(".greeting");

function bgChange() {
  let bgHour = new Date().getHours();
  if (bgHour < 12) {
    document.body.style.backgroundImage =
      "url(https://images.unsplash.com/photo-1527489377706-5bf97e608852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1259&q=80)";
    greeting.textContent = "Good Morning";
  } else if (bgHour < 18) {
    document.body.style.backgroundImage =
      "url(https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)";
    greeting.textContent = "Good Afternoon";
  } else {
    document.body.style.backgroundImage =
      "url(https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80)";
    greeting.textContent = "Good Evening";
  }
}

bgChange();

export { greeting, bgChange };
