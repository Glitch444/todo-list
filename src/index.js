import "./style.css"


class ListItem {
    constructor(body, id = null) {
        this.body = body;
        this.id = id || this.generateUniqueId();
        this.displayDiv = null; 
        this.displayP = null
        this.saveBtn = null;
        this.editBtn = null;
        this.removeBtn = null;
        this.displayInput = null;
       
    }

    generateUniqueId() {
        return "id-" + Date.now() + "-" + Math.floor(Math.random()*1000);
    }

    display() {
        this.displayDiv = document.createElement("div");
        this.displayP = document.createElement("p");
        this.saveBtn = document.createElement("button");
        this.editBtn = document.createElement("button");
        this.removeBtn = document.createElement("button");

        list.appendChild(this.displayDiv);
        this.displayDiv.appendChild(this.displayP);
        this.displayDiv.appendChild(this.saveBtn);
        this.displayDiv.appendChild(this.editBtn);
        this.displayDiv.appendChild(this.removeBtn);

        this.displayDiv.classList.add("display-div");
        this.displayDiv.dataset.id = this.id; 

        this.displayP.textContent = this.body;
        this.saveBtn.textContent = "save";
        this.editBtn.textContent = "edit";
        this.removeBtn.textContent = "X";

        this.removeBtn.addEventListener("click", () => {
            this.displayDiv.remove();
            myStorage = myStorage.filter(item => item.id != this.id);
            localStorage.setItem("myStorage", JSON.stringify(myStorage));
        });

        this.editBtn.addEventListener("click", () => {
            this.edit(this.displayDiv, this.displayP);
        });

        this.saveBtn.addEventListener("click", () => {
            this.save(this.displayDiv);
        })
    }

    edit(displayDiv, displayP) { 
        this.displayInput = document.createElement("input");
        this.displayInput.value = displayP.textContent;
        
        displayDiv.prepend(this.displayInput);
        displayP.remove();

        return this.displayInput;
    }

    save(displayDiv) {
        this.displayP = document.createElement("p");
        this.displayP.textContent = this.displayInput.value;

        displayDiv.prepend(this.displayP);
        this.displayInput.remove();

        this.body = this.displayInput.value;

        let storedItem = myStorage.find(item => item.id === this.id)
        storedItem.body = this.body;

        localStorage.setItem("myStorage", JSON.stringify(myStorage));
    }
    
}

const list = document.getElementById("list");

const showHideBtn = document.getElementById("show-hide-btn");

const addListItem = document.getElementById("add-list-item");
const listItemInput = document.getElementById("list-item-input");
const saveBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");

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

let myStorage = JSON.parse(localStorage.getItem("myStorage")) || [];

myStorage.forEach(item => {
    let listItem = new ListItem(item.body, item.id);
    listItem.display();
})

let draggedItem = null;

function addDragAndDrop() {
    const items = document.querySelectorAll(".display-div");

    items.forEach(item => {
        item.draggable = true; 
        item.addEventListener("dragstart", () => {
            draggedItem = item; 
        });
    });

    list.addEventListener("dragstart", (event) => {
        draggedItem = event.target;
        event.dataTransfer.effectAllowed = "move";
    });
    
    list.addEventListener("dragover", (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    });
    
    list.addEventListener("drop", (event) => {
        event.preventDefault();
        if (event.target !== draggedItem && event.target.closest(".display-div")) {
            const targetItem = event.target.closest(".display-div");
            
            reorderItems(draggedItem, targetItem);

            updateLocalStorage();
        }
    });
}

function updateLocalStorage() {
    localStorage.setItem("myStorage", JSON.stringify(myStorage));
}


saveBtn.addEventListener("click", () => {
    let newListItem = new ListItem(listItemInput.value);

    myStorage.push({body: newListItem.body, id: newListItem.id});

    localStorage.setItem("myStorage", JSON.stringify(myStorage));

    newListItem.display();

    updateLocalStorage();
});


function reorderItems(draggedItem, targetItem) {    
    const draggedIndex = Array.from(list.children).indexOf(draggedItem);
    const targetIndex = Array.from(list.children).indexOf(targetItem);

    if (draggedIndex > targetIndex) {
        list.insertBefore(draggedItem, targetItem);
    } else {
        list.insertBefore(draggedItem, targetItem.nextSibling);
    }

    // Reorder the data in the array
    const draggedId = draggedItem.dataset.id;
    const targetId = targetItem.dataset.id;
    const draggedData = myStorage.find(item => item.id === draggedId);
    const targetIndexInStorage = myStorage.findIndex(item => item.id === targetId);

    myStorage.splice(myStorage.indexOf(draggedData), 1);
    myStorage.splice(targetIndexInStorage, 0, draggedData);
}

addDragAndDrop();



