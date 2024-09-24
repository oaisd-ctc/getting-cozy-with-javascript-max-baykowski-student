const list=document.getElementById("list");
const inputBox=document.getElementById("textBox");
const addButton=document.getElementById("btn-add");
addButton.addEventListener('click', function() {
    const item=document.createElement("li");
    item.setAttribute("id", inputBox.value);
    item.textContent=inputBox.value;
    list.append(item);
    const deleteButton=document.createElement("button");
    deleteButton.setAttribute("type", "button");
    deleteButton.textContent="delete";
    deleteButton.addEventListener('click', function() {
        list.removeChild(item);
    });
    item.append(deleteButton);
    inputBox.value="";
});