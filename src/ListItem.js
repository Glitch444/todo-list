import { getStorage, saveStorage } from "./storage.js";

export class ListItem {
    constructor(body, id = null, list) {
        this.body = body;
        this.id = id || this.generateUniqueId();
        this.displayDiv = null; 
        this.displayP = null
        this.saveBtn = null;
        this.editBtn = null;
        this.removeBtn = null;
        this.displayInput = null;
        this.list = list;
       
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

        this.list.appendChild(this.displayDiv);
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

            let myStorage = getStorage();
            myStorage = myStorage.filter((item) => {
                return item.id != this.id}
            );
            saveStorage(myStorage);
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

        let myStorage = getStorage();
    
        let storedItem = myStorage.find((item) => {
            return item.id === this.id
        });
        
        if (storedItem) {
            storedItem.body = this.body;
            saveStorage(myStorage); 
        }

    }
    
}