const jsConfetti = new JSConfetti()
let inputBox = document.querySelector('#inputBox');
let list = document.querySelector('#list');


inputBox.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addItem(this.value);
        this.value = "";
    }
});

function addItem(text) {
    
    let listItem = document.createElement("li");
    listItem.textContent = text; // Use textContent for plain text
    listItem.innerHTML = `<span>${text}</span><i></i>`
    console.log(inputBox);
    listItem.addEventListener("click", function()
    {
        if(!this.classList.contains('done'))
        {
            this.classList.add('done');
            jsConfetti.addConfetti();
        }
        else
        {
            this.classList.remove('done');
        }
        
    })

    listItem.querySelector("i").addEventListener("click", function(){
        listItem.remove();
    })
    
    list.appendChild(listItem);
}