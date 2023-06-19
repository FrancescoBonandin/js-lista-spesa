

let shoppingList = ["pane", "latte", "caffè", "acqua", "biscotti"];


const container = document.querySelector(".container");

let sLContainer = document.createElement("ul");

container.append(sLContainer);

sLContainer.classList.add("shopping-list-container");

