const productMenu = document.getElementById("product-menu");
const product = document.querySelector(".container");

const hoverInteraction = () => {
    if (product.classList.contains("invisible")) {
        product.classList.remove("invisible");
        product.classList.add("visible");
        productMenu.style.color = "#63bfec";
    } else {
        product.classList.remove("visible");
        product.classList.add("invisible");
        productMenu.style.color = "white";
    }
};

const clickInteraction = () => {
    if (product.classList.contains("invisible")) {
        product.classList.remove("invisible");
        product.classList.add("visible");
        productMenu.style.color = "#63bfec";
    } else {
        product.classList.remove("visible");
        product.classList.add("invisible");
        productMenu.style.color = "white";
    }
};

window.addEventListener("load", ()=>{
    if(window.innerWidth >= 991){
        productMenu.removeEventListener("click", clickInteraction);   
        productMenu.addEventListener("mouseover", hoverInteraction);
    } else{
        productMenu.addEventListener("click", clickInteraction);
        productMenu.removeEventListener("mouseover", hoverInteraction);
    }
})
window.addEventListener("resize", ()=>{
    if(window.innerWidth >= 991){
        productMenu.addEventListener("mouseover", hoverInteraction);
        productMenu.removeEventListener("click", clickInteraction);   
    } else{
        productMenu.addEventListener("click", clickInteraction);
        productMenu.removeEventListener("mouseover", hoverInteraction);
    }
})
