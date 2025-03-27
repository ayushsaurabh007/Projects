//const items = document.querySelectorAll(".items");
const add_button = document.querySelector(".add-button");
const boards = document.querySelectorAll(".board");



//add-button-functionality 
add_button.addEventListener("click" , ()=>{
    let input = prompt("what is your task");
    console.log(input);
    let item = document.createElement("div");
    item.innerHTML=input;
    item.classList.add('items')
    const board = document.querySelector(".to-do-board");
    board.appendChild(item);
    item.setAttribute('draggable' , true);
    item.addEventListener(('dragstart') , () => {
        item.classList.add("flying");
    })
    item.addEventListener(('dragend') , () => {
        item.classList.remove("flying");
    })
  
})



function draggable (){         //function to make all the items draggable 
    const items = document.querySelectorAll(".items");
    items.forEach((items)=> {                     //set all element to draggable 
        items.setAttribute('draggable' , true);
    })
}




//i want to implement a function where dragstart add a new class and dragend will remove that class
const allitems = document.querySelectorAll(".items");
allitems.forEach((allitems) =>{
    allitems.addEventListener(('dragstart') , () => {
        allitems.classList.add("flying");
    })
    allitems.addEventListener(('dragend') , () => {
        allitems.classList.remove("flying");
    })
})

//now i want to make the drop function 
boards.forEach((boards) => {
    boards.addEventListener("dragover" , () => {
        console.log("mere upar se kuch to gaya");
        let curritem = document.querySelector(".flying");
        boards.appendChild(curritem);
    })
})

