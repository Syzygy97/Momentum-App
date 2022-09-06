const time = document.querySelector(".time");
const timeFormatButton = document.querySelector(".timeBtn.seen");

timeFormatButton.addEventListener("click", () => {
  let timeFormatValue = timeFormatButton.getAttribute("data-time-format");

  if (timeFormatValue === "12") {
    timeFormatButton.setAttribute("data-time-format", "24");
  } else {
    timeFormatButton.setAttribute("data-time-format", "12");
  }
});

function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  let amPm = hour >= 12 ? "PM" : "AM";
  const timeFormatValue = timeFormatButton.getAttribute("data-time-format");
  if (timeFormatValue === "12") {
    hour = hour % 12;
  } else {
    hour = hour;
    amPm = "";
  }

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${amPm}`;
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${amPm}`;

  setTimeout(showTime, 1000);
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

showTime();

export { time, showTime, addZero };
