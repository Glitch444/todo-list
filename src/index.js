import "./style.css"

const mainContainer = document.getElementById("main-container");
const list = document.getElementById("list");

const showHideBtn = document.getElementById("show-hide-btn");
const addListItem = document.getElementById("add-list-item");

const saveBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");
const listItemInput = document.getElementById("list-item-input");

showHideBtn.addEventListener("click", () => {
    if (addListItem.style.display === "none") {
        addListItem.style.display = "flex";
        showHideBtn.textContent = "Don't add new item";
        showHideBtn.style.marginBottom = "0px";
    } 
    else {
        addListItem.style.display = "none";
        showHideBtn.textContent = "Add new item";
        showHideBtn.style.marginBottom = "20px";
    }
});

clearBtn.addEventListener("click", () => {
    listItemInput.value = "";
});


saveBtn.addEventListener("click", saveListItem);

function saveListItem(){
    let newListItem = new ListItem(listItemInput.value);
    newListItem.display();
};


class ListItem {
    constructor(body, ) {
        this.body = body;

        this.displayDiv = null; // placeholder for the displayDiv element
        this.displayP = null
        this.saveBtn = null;
        this.editBtn = null;
        this.removeBtn = null;
    }

    display() {
        this.displayDiv = document.createElement("div");
        this.displayP = document.createElement("p");
        this.saveBtn = document.createElement("button");
        this.editBtn = document.createElement("button");
        this.removeBtn = document.createElement("button");

        mainContainer.appendChild(this.displayDiv);
        this.displayDiv.appendChild(this.displayP);
        this.displayDiv.appendChild(this.saveBtn);
        this.displayDiv.appendChild(this.editBtn);
        this.displayDiv.appendChild(this.removeBtn);

        this.displayDiv.classList.add("display-div")

        this.displayP.textContent = this.body;
        this.saveBtn.textContent = "save";
        this.editBtn.textContent = "edit";
        this.removeBtn.textContent = "X";

        this.removeBtn.addEventListener("click", () => {
            this.displayDiv.remove();
        })

    }
    
    edit() {

    }
    save(){

    }
}