let myStorage = JSON.parse(localStorage.getItem("myStorage")) || [];

export function getStorage() {
    return myStorage;
}

export function saveStorage(updatedStorage) {
    myStorage = updatedStorage;
    localStorage.setItem("myStorage", JSON.stringify(myStorage));
}



// groups
let myGroups = JSON.parse(localStorage.getItem("myGroups")) || [];

export function getGroups() {
    return myGroups;
}

export function saveGroups(updateGroups){
    myGroups = updateGroups;
    localStorage.setItem("myGroups", JSON.stringify(myGroups));
}