

let shoppingList = ["pane", "latte", "caffè", "acqua", "biscotti"];


const container = document.querySelector(".container");

let sLContainer = document.createElement("ul");

container.append(sLContainer);

sLContainer.classList.add("shopping-list-container");


let index=0;

while(index < shoppingList.length){

    let newLi = document.createElement("li");

    sLContainer.append(newLi);
    newLi.innerHTML = shoppingList[index];

    index++;

}