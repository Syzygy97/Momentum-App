const quoteText = document.querySelector(".quote-content");
const quoteBtn = document.querySelector(".newQuoteBtn");
const authorName = document.querySelector(".author");
const soundBtn = document.querySelector("#sound");

function quotesListener() {
  quoteBtn.addEventListener("click", randomQuote);
  soundBtn.addEventListener("click", playSound);
}

function playSound() {
  let speak = new SpeechSynthesisUtterance(
    `${quoteText.innerText} by ${authorName.innerText}`
  );
  speechSynthesis.speak(speak);
}

function randomQuote() {
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading Quote...";
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      quoteText.innerText = result.content;
      authorName.innerText = result.author;
      quoteBtn.innerText = "New Quote";
      quoteBtn.classList.remove("loading");
    });
}

quotesListener();
randomQuote();

export {
  quoteText,
  quoteBtn,
  authorName,
  soundBtn,
  quotesListener,
  playSound,
  randomQuote,
};
