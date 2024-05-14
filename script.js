// Selecting all necessary HTML elements
const productSection = document.querySelector(".product-section");
const recipesSection = document.querySelector(".recipes-section");
const tipsSection = document.querySelector(".tips-section");
const holidaySection = document.querySelector(".holiday-section");
const storySection = document.querySelector(".story-section");

const productMenu = document.querySelector(".product-menu");
const recipesMenu = document.querySelector(".recipes-menu");
const tipsMenu = document.querySelector(".tips-menu");
const holidayMenu = document.querySelector(".holiday-menu");
const storyMenu = document.querySelector(".story-menu");

const productCaret = document.querySelector(".product-caret");
const holidayCaret = document.querySelector(".holiday-caret");
const storyCaret = document.querySelector(".story-caret");

// Function to set all carets to down position
const allCaretDown = ()=>{
  productCaret.classList.add("bi-caret-down");
  holidayCaret.classList.add("bi-caret-down");
  storyCaret.classList.add("bi-caret-down");
  productCaret.classList.remove("bi-caret-up");
  holidayCaret.classList.remove("bi-caret-up");
  storyCaret.classList.remove("bi-caret-up");
}

// Function to handle interactions with product menu
const productMenuInteraction = () => {
  productMenu.style.color = "#63bfec";
  recipesMenu.style.color = "white";
  tipsMenu.style.color = "white";
  holidayMenu.style.color = "white";
  storyMenu.style.color = "white";
  productSection.style.display = "block";
  recipesSection.style.display = "none";
  tipsSection.style.display = "none";
  holidaySection.style.display = "none";
  storySection.style.display = "none";
  allCaretDown();
  productCaret.classList.add("bi-caret-up");
};

// Function to handle interactions with recipes menu
const recipesMenuInteraction = () => {
  productMenu.style.color = "white";
  recipesMenu.style.color = "#63bfec";
  tipsMenu.style.color = "white";
  holidayMenu.style.color = "white";
  storyMenu.style.color = "white";
  productSection.style.display = "none";
  recipesSection.style.display = "flex";
  tipsSection.style.display = "none";
  holidaySection.style.display = "none";
  storySection.style.display = "none";
  allCaretDown();
};

// Function to handle interactions with tips menu
const tipsMenuInteraction = () => {
  productMenu.style.color = "white";
  recipesMenu.style.color = "white";
  tipsMenu.style.color = "#63bfec";
  holidayMenu.style.color = "white";
  storyMenu.style.color = "white";
  productSection.style.display = "none";
  recipesSection.style.display = "none";
  tipsSection.style.display = "flex";
  holidaySection.style.display = "none";
  storySection.style.display = "none";
  allCaretDown();
};

// Function to handle interactions with holiday menu
const holidayMenuInteraction = () => {
  productMenu.style.color = "white";
  recipesMenu.style.color = "white";
  tipsMenu.style.color = "white";
  holidayMenu.style.color = "#63bfec";
  storyMenu.style.color = "white";
  productSection.style.display = "none";
  recipesSection.style.display = "none";
  tipsSection.style.display = "none";
  holidaySection.style.display = "flex";
  storySection.style.display = "none";
  allCaretDown();
  holidayCaret.classList.add("bi-caret-up")
};

// Function to handle interactions with story menu
const storyMenuInteraction = () => {
  productMenu.style.color = "white";
  recipesMenu.style.color = "white";
  tipsMenu.style.color = "white";
  holidayMenu.style.color = "white";
  storyMenu.style.color = "#63bfec";
  productSection.style.display = "none";
  recipesSection.style.display = "none";
  tipsSection.style.display = "none";
  holidaySection.style.display = "none";
  storySection.style.display = "flex";
  allCaretDown();
  storyCaret.classList.add("bi-caret-up")
};

// Function to remove click event listeners from menus
const removeClickListeners = ()=>{
  productMenu.removeEventListener("click", productMenuInteraction);
  recipesMenu.removeEventListener("click", recipesMenuInteraction);
  tipsMenu.removeEventListener("click", tipsMenuInteraction);
  holidayMenu.removeEventListener("click", holidayMenuInteraction);
  storyMenu.removeEventListener("click", storyMenuInteraction);
};

// Function to remove hover event listeners from menus
const removeHoverListeners = ()=>{
  productMenu.removeEventListener("mouseover", productMenuInteraction);
  recipesMenu.removeEventListener("mouseover", recipesMenuInteraction);
  tipsMenu.removeEventListener("mouseover", tipsMenuInteraction);
  holidayMenu.removeEventListener("mouseover", holidayMenuInteraction);
  storyMenu.removeEventListener("mouseover", storyMenuInteraction);
}

// Function to handle menu interactions based on window size
const menuInteraction = () => {
  if (window.innerWidth >= 991) {
    removeClickListeners();

    // Adding hover event listeners for larger screens
    productMenu.addEventListener("mouseover", productMenuInteraction);
    recipesMenu.addEventListener("mouseover", recipesMenuInteraction);
    tipsMenu.addEventListener("mouseover", tipsMenuInteraction);
    holidayMenu.addEventListener("mouseover", holidayMenuInteraction);
    storyMenu.addEventListener("mouseover", storyMenuInteraction);
  } else {
    removeHoverListeners();

    // Adding click event listeners for smaller screens
    productMenu.addEventListener("click", productMenuInteraction);
    recipesMenu.addEventListener("click", recipesMenuInteraction);
    tipsMenu.addEventListener("click", tipsMenuInteraction);
    holidayMenu.addEventListener("click", holidayMenuInteraction);
    storyMenu.addEventListener("click", storyMenuInteraction);
  }
};

// Initialize menu interactions on window load and resize
window.addEventListener("load", menuInteraction);
window.addEventListener("resize", menuInteraction);