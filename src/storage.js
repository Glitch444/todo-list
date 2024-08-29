let myStorage = JSON.parse(localStorage.getItem("myStorage")) || [];

export function getStorage() {
    return myStorage;
}

export function saveStorage(updatedStorage) {
    myStorage = updatedStorage;
    localStorage.setItem("myStorage", JSON.stringify(myStorage));
}


