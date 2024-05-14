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

const allCaretDown = ()=>{
  productCaret.classList.add("bi-caret-down");
  holidayCaret.classList.add("bi-caret-down");
  storyCaret.classList.add("bi-caret-down");
  productCaret.classList.remove("bi-caret-up");
  holidayCaret.classList.remove("bi-caret-up");
  storyCaret.classList.remove("bi-caret-up");
}

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

const removeClickListeners = ()=>{
  productMenu.removeEventListener("click", productMenuInteraction);
  recipesMenu.removeEventListener("click", recipesMenuInteraction);
  tipsMenu.removeEventListener("click", tipsMenuInteraction);
  holidayMenu.removeEventListener("click", holidayMenuInteraction);
  storyMenu.removeEventListener("click", storyMenuInteraction);
};

const removeHoverListeners = ()=>{
  productMenu.removeEventListener("mouseover", productMenuInteraction);
  recipesMenu.removeEventListener("mouseover", recipesMenuInteraction);
  tipsMenu.removeEventListener("mouseover", tipsMenuInteraction);
  holidayMenu.removeEventListener("mouseover", holidayMenuInteraction);
  storyMenu.removeEventListener("mouseover", storyMenuInteraction);
}

const menuInteraction = () => {
  if (window.innerWidth >= 991) {
    removeClickListeners();
    productMenu.addEventListener("mouseover", productMenuInteraction);
    recipesMenu.addEventListener("mouseover", recipesMenuInteraction);
    tipsMenu.addEventListener("mouseover", tipsMenuInteraction);
    holidayMenu.addEventListener("mouseover", holidayMenuInteraction);
    storyMenu.addEventListener("mouseover", storyMenuInteraction);
  } else {
    removeHoverListeners();
    productMenu.addEventListener("click", productMenuInteraction);
    recipesMenu.addEventListener("click", recipesMenuInteraction);
    tipsMenu.addEventListener("click", tipsMenuInteraction);
    holidayMenu.addEventListener("click", holidayMenuInteraction);
    storyMenu.addEventListener("click", storyMenuInteraction);
  }
};

window.addEventListener("load", menuInteraction);
window.addEventListener("resize", menuInteraction);
