const jsConfetti = new JSConfetti()
let inputBox = document.querySelector('#inputBox');
let dueDate = document.querySelector('#dueDate');
let button = document.querySelector('.add-button');
let list = document.querySelector('#list');

inputBox.value = "";
dueDate.value = "";

inputBox.addEventListener("keyup", function(event) {
    if (event.key === "Enter" && inputBox.value.trim() !== "") {

        if(dueDate.value.trim() !== ""){
            addItem(this.value,dueDate.value);
        } else {
            addItem(inputBox.value,"");
        }
        
        this.value = "";
        dueDate.value = "";
    } else if (event.key === "Enter" && (inputBox.value.trim() === "" || dueDate.value.trim() === "")){
        togglePopup("Please fill in both the input box and due date fields.");
    }
});

button.addEventListener("click", function(event) {
    if (inputBox.value.trim() !== "") {

        if(dueDate.value.trim() !== ""){
            addItem(inputBox.value,dueDate.value);
        } else {
            addItem(inputBox.value,"");
        }
        
        inputBox.value = "";
        dueDate.value = "";
    } else {
        togglePopup("Please fill in both the input box and due date fields.");
    }
});


function addItem(text, date) {
    let listItem = document.createElement("li");
    console.log(date)
    
    if(date){
        listItem.innerHTML = `<span>${text} => <strong>${date}</strong></span><i></i>`;
    } else {
        listItem.innerHTML = `<span>${text}</span><i></i>`;
    }
    
    listItem.addEventListener("click", function() {
        if (!this.classList.contains('done')) {
            this.classList.add('done');
            jsConfetti.addConfetti();
        } else {
            this.classList.remove('done');
        }
    });
    listItem.querySelector("i").addEventListener("click", function() {
        event.stopPropagation();
        listItem.remove();
    });
    list.appendChild(listItem);
}

function togglePopup(message) {
    let popup = document.getElementById("popup");
    let popupMessage = document.getElementById("popupMessage");
    popupMessage.textContent = message;
    popup.style.display = "block";

    setTimeout(function() {
        popup.style.display = "none";
    }, 2000); // Hide the popup after 2 seconds
}