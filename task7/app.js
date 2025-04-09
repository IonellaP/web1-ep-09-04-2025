function addListItem() {
    const list = document.getElementById("myList")

    const newItem = document.createElement("li")
    newItem.textContent = "New Item"

    list.appendChild(newItem)
}

const addButton = document.getElementById("addButton")
addButton.addEventListener("click", addListItem)