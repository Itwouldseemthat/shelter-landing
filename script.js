const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");
const CAROUSEL = document.querySelector("#carousel");
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");
const ITEM_ACTIVE = document.querySelector("#item-active");

const moveLeft = () => {
    CAROUSEL.classList.add("transition-left");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_LEFT.removeEventListener("click", moveRight);
};


const moveRight = () => {
    CAROUSEL.classList.add("transition-right");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

CAROUSEL.addEventListener("animationend", (animationEvent) => {
    if (animationEvent.animationName === "move-left") {
        CAROUSEL.classList.remove("transition-left");
        
        const activeItems = document.querySelector("#item-active").innerHTML;

        const leftItems = ITEM_LEFT.innerHTML;
        document.querySelector("#item-active").innerHTML = leftItems;
        
        const rightItems = ITEM_RIGHT.innerHTML;
        document.querySelector("#item-left").innerHTML = rightItems;

        document.querySelector("#item-right").innerHTML = activeItems;
        

    }
    else {
        CAROUSEL.classList.remove("transition-right");
    } 

    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_RIGHT.addEventListener("click", moveRight);
});

CAROUSEL.addEventListener("animationend", (animationEvent) => {
    if (animationEvent.animationName === "move-right") {
        CAROUSEL.classList.remove("transition-right");
        
        const activeItems = document.querySelector("#item-active").innerHTML;

        const rightItems = ITEM_RIGHT.innerHTML;
        document.querySelector("#item-active").innerHTML = rightItems;
        
        const leftItems = ITEM_LEFT.innerHTML;
        document.querySelector("#item-right").innerHTML = leftItems;

        document.querySelector("#item-left").innerHTML = activeItems;
        

    }
    else {
        CAROUSEL.classList.remove("transition-left");
    } 

    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_RIGHT.addEventListener("click", moveRight);
});