import "./style.css"

import { ListItem } from "./ListItem.js";

import { getStorage, saveStorage } from "./storage.js";


const listGroups = document.getElementById("list-groups");

const showHideBtn = document.getElementById("show-hide-btn");

const addListItem = document.getElementById("add-list-item");
const listItemInput = document.getElementById("list-item-input");
const saveBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");

const list = document.getElementById("list");


getStorage().forEach(item => {
    let listItem = new ListItem(item.body, item.id, list);
    listItem.display();
});


showHideBtn.addEventListener("click", () => {
    if (addListItem.style.display === "none" || addListItem.style.display === "") {
        addListItem.style.display = "flex";
        showHideBtn.textContent = "Don't add new item";

    } 
    else {
        addListItem.style.display = "none";
        showHideBtn.textContent = "Add new item";
    }
});

clearBtn.addEventListener("click", () => {
    listItemInput.value = "";
});

saveBtn.addEventListener("click", () => {
    let newListItem = new ListItem(listItemInput.value, null, list);
    
    let myStorage = getStorage();
    myStorage.push({body: newListItem.body, id: newListItem.id});
   
    saveStorage(myStorage);
    
    newListItem.display();

    addDragAndDrop();
});


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
    saveStorage(getStorage());
};


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
    const draggedData = getStorage().find(item => item.id === draggedId);
    const targetIndexInStorage = getStorage().findIndex(item => item.id === targetId);

    let myStorage = getStorage();
    myStorage.splice(myStorage.indexOf(draggedData), 1);
    myStorage.splice(targetIndexInStorage, 0, draggedData);
    saveStorage(myStorage);
}

addDragAndDrop();



let isGroups = false;

function newGroup() {
    if(!isGroups) {
         isGroups = true;
        const group = document.createElement("div");

        group.textContent = "Untitled-1"

        listGroups.appendChild(group);

        console.log("no group")
    } 
    else {
       

        const createListGroupBtn = document.createElement("button");

        createListGroupBtn.textContent = "Add new list group";
    }
};



