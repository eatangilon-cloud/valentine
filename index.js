window.addEventListener("load", function () {

  setTimeout(function () {

    // Make sure body exists before removing class
    if (document.body) {
      document.body.classList.remove("not-loaded");
    }

    const text = "HAPPY VALENTINES DAY I LOVE U ^^ ❤️";
    const titleElement = document.getElementById("title");

    // Make sure the element exists
    if (!titleElement) {
      console.error("Element with id 'title' not found.");
      return;
    }

    titleElement.textContent = "";
    let index = 0;

    function appendTitle() {
      if (index < text.length) {
        titleElement.textContent += text.charAt(index);
        index++;
        setTimeout(appendTitle, 120); // typing speed
      }
    }

    appendTitle();

  }, 1000);

});

// Put this BELOW your typing animation code:

const loveBtn = document.querySelector(".love-btn");
const letter = document.getElementById("loveLetter");

if (loveBtn && letter) {
  loveBtn.addEventListener("click", function () {
    letter.classList.toggle("show");
  });
} else {
  console.error("Love button or letter element not found");
}
