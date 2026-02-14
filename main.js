// Wait for everything to load
window.addEventListener("load", function() {

  // Typing animation
  setTimeout(function() {

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

  // LOVE BUTTON FUNCTIONALITY - Direct approach
  console.log("Looking for love button...");
  
  // Try to find the button every 500ms until it exists
  function findButtonAndAttach() {
    const loveBtn = document.querySelector(".love-btn");
    const letter = document.getElementById("loveLetter");
    
    console.log("Button found:", loveBtn);
    console.log("Letter found:", letter);
    
    if (loveBtn && letter) {
      console.log("Both elements found! Attaching event...");
      
      // Remove any existing event listeners by cloning and replacing
      const newBtn = loveBtn.cloneNode(true);
      loveBtn.parentNode.replaceChild(newBtn, loveBtn);
      
      // Add event listener to the new button
      newBtn.addEventListener("click", function(e) {
        e.preventDefault();
        console.log("Button clicked!");
        letter.classList.toggle("show");
        console.log("Current letter classes:", letter.className);
      });
      
      return true; // Success
    }
    return false; // Not found yet
  }
  
  // Try immediately
  if (!findButtonAndAttach()) {
    // If not found, try again after a short delay
    console.log("Elements not found yet, will try again...");
    setTimeout(findButtonAndAttach, 500);
    setTimeout(findButtonAndAttach, 1000);
    setTimeout(findButtonAndAttach, 1500);
  }

});