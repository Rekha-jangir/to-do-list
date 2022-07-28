let item= document.querySelector("#item")
let toDoBox = document.querySelector("#to-do-box")
let addToDoButton = document.getElementById("addTask")

item.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        addToDo(this.value)
        this.value = ""
    }
}
)
const addToDo = (item) => {
    const listItem = document.createElement("li")
    listItem.innerHTML = `
       ${item}
    `;

    toDoBox.appendChild(listItem)
    listItem.addEventListener("click",function(){
    listItem.style.textDecoration="line-thrugh"
    })
}

addToDoButton.addEventListener("click",function(){
    var paragraph=document.createElement("li")
    paragraph.classList.add("paragraph-styling")
    paragraph.innerText=item.value
    toDoBox.appendChild(paragraph)
    item.value="";
    paragraph.addEventListener("click",function(){
        paragraph.style.textDecoration="line-through"
    })
    paragraph.addEventListener("dblclick",function(){
        toDoBox.removeChild(paragraph)
    })
})
