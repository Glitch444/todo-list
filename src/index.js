import "./style.css"

import { ListItem } from "./ListItem.js";

import { getStorage, saveStorage } from "./storage.js";


const listItemInput = document.getElementById("list-item-input");
const saveBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");
const list = document.getElementById("list-container");



clearBtn.addEventListener("click", () => {
    listItemInput.value = "";
});

saveBtn.addEventListener("click", () => {
    let newListItem = new ListItem(listItemInput.value, null, list);

    let myStorage = getStorage();
    myStorage.push({body: newListItem.body, id: newListItem.id});
    saveStorage(myStorage);
    
    newListItem.display();

    addDragAndDropToListItems();
});


let draggedItem = null;
function addDragAndDropToListItems() {
    const items = document.querySelectorAll(".display-div");
    items.forEach(item => {
        item.draggable = true;
        item.addEventListener("dragstart", (event) => {
            draggedItem = event.target;
        });
    });

    list.addEventListener("dragstart", (event) => {
        draggedItem = event.target.closest(".display-div");
        event.dataTransfer.effectAllowed = "move";
    });

    list.addEventListener("dragover", (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    });

    list.addEventListener("drop", (event) => {
        event.preventDefault();
        if (event.target.closest(".display-div")) {
            const targetItem = event.target.closest(".display-div");
            if (draggedItem !== targetItem) {
                reorderItems(draggedItem, targetItem);
                updateLocalStorage();
            }
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

    const draggedId = draggedItem.dataset.id;
    const targetId = targetItem.dataset.id;
    const draggedData = getStorage().find(item => item.id === draggedId);
    const targetIndexInStorage = getStorage().findIndex(item => item.id === targetId);

    let myStorage = getStorage();
    myStorage.splice(myStorage.indexOf(draggedData), 1);
    myStorage.splice(targetIndexInStorage, 0, draggedData);
    saveStorage(myStorage);
}


getStorage().forEach(item => {
    let listItem = new ListItem(item.body, item.id, list);
    listItem.display(listItem);
});

addDragAndDropToListItems();

