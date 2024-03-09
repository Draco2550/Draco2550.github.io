/*let textList  = document.getElementById('textButton');
let listContainer = document.getElementById('listContainer');
let inputField = document.getElementById( 'inputfield')

textList.addEventListener('click', function()
{
    var orderedList = document.createElement('ol')
    orderedList.classList.add('orderedList-styling')
    orderedList.innerText = inputField.value;
    toDoContainer.appendChild(orderedList);
})
*/
let inputBx = document.querySelector('#inputBx');
let list = document.querySelector('#list');

inputBx.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addItem(this.value);
        this.value = "";
    }
});

function addItem(text) {
    
    let listItem = document.createElement("li");
    listItem.textContent = text; // Use textContent for plain text
    listItem.innerHTML = `<span>${text}</span><i></i>`
    console.log(inputBx);
    listItem.addEventListener("click", function()
    {
        this.classList.toggle('done');
    })

    listItem.querySelector("i").addEventListener("click", function(){
        listItem.remove();
    })
    
    list.appendChild(listItem);
}