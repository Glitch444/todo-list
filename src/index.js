import "./style.css"

import { ListItem } from "./ListItem.js";

import { getStorage, saveStorage, getGroups, saveGroups } from "./storage.js";


const listGroups = document.getElementById("list-groups");
const addGroupBtn = document.getElementById("add-group");
const showHideBtn = document.getElementById("show-hide-btn");
const addListItem = document.getElementById("add-list-item");
const listItemInput = document.getElementById("list-item-input");
const saveBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");
const list = document.getElementById("list");

class Group {
    constructor(title = Group.generateGroupName(), id = null) {
        this.title = title;
        this.id = id || this.generateUniqueId();
        this.groupDiv = null;
        this.groupP = null;
        this.saveBtn = null
    }

    static updateGroupCounter() {
        const groupDivs = document.querySelectorAll(".group-div");
        return groupDivs.length;
    }

    static generateGroupName() {
        const groupCounter = Group.updateGroupCounter();
        return `Untitled-${groupCounter + 1}`;
    }

    generateUniqueId() {
        return "group-" + Date.now() + "-" + Math.floor(Math.random()*1000);
    }

    displayGroup(listGroups) {
        this.groupDiv = document.createElement("div");
        this.groupP = document.createElement("p");

       
        this.groupDiv.dataset.id = this.id;
        this.groupDiv.classList.add("group-div")
        this.groupP.textContent = this.title;
    
        this.saveBtn = document.createElement("button")
        this.saveBtn.textContent = "save";

        this.groupDiv.appendChild(this.groupP);
        this.groupDiv.appendChild(this.saveBtn);

        listGroups.appendChild(this.groupDiv);

        this.groupDiv.draggable = true;
    }

}


function updateAddGroupButtonVisibility() {
    const groupDivs = document.querySelectorAll(".group-div");
    addGroupBtn.style.display = groupDivs.length > 0 ? "block" : "none";
}



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

    addDragAndDropToListItems();

    newGroup();

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
function addDragAndDropToGroups() {
    const groups = document.querySelectorAll(".group-div");
    groups.forEach(group => {
        group.draggable = true;
        group.addEventListener("dragstart", (event) => {
            draggedItem = event.target;
        });
    });

    listGroups.addEventListener("dragstart", (event) => {
        draggedItem = event.target.closest(".group-div");
        event.dataTransfer.effectAllowed = "move";
    });

    listGroups.addEventListener("dragover", (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    });

    listGroups.addEventListener("drop", (event) => {
        event.preventDefault();
        if (event.target.closest(".group-div")) {
            const targetGroup = event.target.closest(".group-div");
            if (draggedItem !== targetGroup) {
                reorderGroups(draggedItem, targetGroup);
                updateGroupStorage();
            }
        }
    });
}

function updateLocalStorage() {
    saveStorage(getStorage());
};

function updateGroupStorage() {
    saveGroups(getGroups());
}




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

function reorderGroups(draggedGroup, targetGroup) {
    const draggedIndex = Array.from(listGroups.children).indexOf(draggedGroup);
    const targetIndex = Array.from(listGroups.children).indexOf(targetGroup);

    if (draggedIndex > targetIndex) {
        listGroups.insertBefore(draggedGroup, targetGroup);
    } else {
        listGroups.insertBefore(draggedGroup, targetGroup.nextSibling);
    }

    const draggedId = draggedGroup.dataset.id;
    const targetId = targetGroup.dataset.id;
    const draggedData = getGroups().find(group => group.id === draggedId);
    const targetIndexInStorage = getGroups().findIndex(group => group.id === targetId);

    let myGroups = getGroups();
    myGroups.splice(myGroups.indexOf(draggedData), 1);
    myGroups.splice(targetIndexInStorage, 0, draggedData);
    saveGroups(myGroups);
}



let isGroups = false;

function newGroup() {
    if(!isGroups) {
        isGroups = true;

        const newGroup = new Group();
        newGroup.displayGroup(listGroups);

        let myGroups = getGroups();
        myGroups.push({
            title: newGroup.title,
            id: newGroup.id
        });
        saveGroups(myGroups);

        updateAddGroupButtonVisibility();

    } 
};



addGroupBtn.addEventListener("click", () => {
    const anotherGroup = new Group();
    anotherGroup.displayGroup(listGroups);

    let myGroups = getGroups();
    myGroups.push({
        title: anotherGroup.title,
        id: anotherGroup.id
    });
    saveGroups(myGroups);

    updateAddGroupButtonVisibility();
});


getStorage().forEach(item => {
    let listItem = new ListItem(item.body, item.id, list);
    listItem.display(listGroups);
});


getGroups().forEach(group => {
    let listGroup = new Group(group.title, group.id)
    console.log(listGroup);
    listGroup.displayGroup(listGroups);
});


addDragAndDropToListItems();
addDragAndDropToGroups();

updateAddGroupButtonVisibility();

console.log(getStorage())
console.log(getGroups());