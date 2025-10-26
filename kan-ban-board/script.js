//const items = document.querySelectorAll(".items");
const to_do = document.querySelector(".to-do");
const ongoing = document.querySelector(".on");
const completed = document.querySelector(".com");
const boards = document.querySelectorAll(".board");
const del_board = document.querySelector(".del-board");

//add-button-functionality 
to_do.addEventListener("click", () => {
    const board = document.querySelector(".to-do-board");
    console.log("button was clicked")
    console.log(board)
    let inbox = document.createElement("input");
    let add = document.createElement("button");
    add.textContent = 'add';
    inbox.type = "text";
    inbox.placeholder = "type your shit here";
    board.appendChild(inbox);
    board.appendChild(add);
    inbox.focus();
    function helper () {
        console.log("add button is clicked")
        if(inbox.value.trim() === ""){
            inbox.remove();
            add.remove();
            alert("enter something");
            return ;
        }
        let item = document.createElement("div");
        console.log(inbox.value);
        item.innerHTML = inbox.value;
        item.classList.add('items')
        //const board = document.querySelector(".to-do-board");
        board.appendChild(item);
        item.setAttribute('draggable', true);
        item.addEventListener(('dragstart'), () => {
            item.classList.add("flying");
        })
        item.addEventListener(('dragend'), () => {
            item.classList.remove("flying");
        })
        inbox.remove();
        add.remove();
    }
    add.addEventListener("click", helper);
    inbox.addEventListener("keydown" , (e) => {
        if(e.key === "Enter"){
            helper();
        }
    })
})
ongoing.addEventListener("click", () => {
    const board = document.querySelector(".on-going");
    console.log("button was clicked")
    console.log(board)
    let inbox = document.createElement("input");
    let add = document.createElement("button");
    add.textContent = 'add';
    inbox.type = "text";
    inbox.placeholder = "type your shit here";
    board.appendChild(inbox);
    board.appendChild(add);
    add.addEventListener("click", () => {
        console.log("add button is clicked")
        if(inbox.value.trim() === ""){
            inbox.remove();
            add.remove();
            alert("enter something");
            return ;
        }
        let item = document.createElement("div");
        console.log(inbox.value);
        item.innerHTML = inbox.value;
        item.classList.add('items')
        //const board = document.querySelector(".to-do-board");
        board.appendChild(item);
        item.setAttribute('draggable', true);
        item.addEventListener(('dragstart'), () => {
            item.classList.add("flying");
        })
        item.addEventListener(('dragend'), () => {
            item.classList.remove("flying");
        })
        inbox.remove();
        add.remove();
    })
})
completed.addEventListener("click", () => {
    const board = document.querySelector(".completed");
    console.log("button was clicked")
    console.log(board)
    let inbox = document.createElement("input");
    let add = document.createElement("button");
    add.textContent = 'add';
    inbox.type = "text";
    inbox.placeholder = "type your shit here";
    board.appendChild(inbox);
    board.appendChild(add);
    add.addEventListener("click", () => {
        console.log("add button is clicked")
        if(inbox.value.trim() === ""){
            inbox.remove();
            add.remove();
            alert("enter something");
            return ;
        }
        let item = document.createElement("div");
        console.log(inbox.value);
        item.innerHTML = inbox.value;
        item.classList.add('items')
        //const board = document.querySelector(".to-do-board");
        board.appendChild(item);
        item.setAttribute('draggable', true);
        item.addEventListener(('dragstart'), () => {
            item.classList.add("flying");
        })
        item.addEventListener(('dragend'), () => {
            item.classList.remove("flying");
        })
        inbox.remove();
        add.remove();
    })
})

boards.forEach((boards) => {
    boards.addEventListener("dragover", () => {
        console.log("mere upar se kuch to gaya");
        let curritem = document.querySelector(".flying");
        boards.appendChild(curritem);
    })
})

del_board.addEventListener("dragover", (e) => {
    e.preventDefault(); // allows drop
});

del_board.addEventListener("drop", (e) => {
    e.preventDefault();
    console.log("mere upar se kuch to gaya ", Math.random())
    let curritem = document.querySelector(".flying");
    curritem.remove()
})


//--------------------------------------OLD CODE -------------------------


// to_do.addEventListener("click" , ()=>{
//     const board = document.querySelector(".to-do-board");
//     console.log("button was clicked")
//     console.log(board)
//     console.log(test(board) , "this is the test value from the function ")
//     let input = prompt("what is your task");    //input
//     console.log(input , "  is the input");
//     let item = document.createElement("div");
//     item.innerHTML=input;
//     item.classList.add('items')
//     //const board = document.querySelector(".to-do-board");
//     board.appendChild(item);
//     item.setAttribute('draggable' , true);
//     item.addEventListener(('dragstart') , () => {
//         item.classList.add("flying");
//     })
//     item.addEventListener(('dragend') , () => {
//         item.classList.remove("flying");
//     })
// })




// ongoing.addEventListener("click", () => {
//     console.log("button was clicked")
//     let input = prompt("what is your task");
//     console.log(input);
//     let item = document.createElement("div");
//     item.innerHTML = input;
//     item.classList.add('items')
//     const board = document.querySelector(".on-going");
//     board.appendChild(item);
//     item.setAttribute('draggable', true);
//     item.addEventListener(('dragstart'), () => {
//         item.classList.add("flying");
//     })
//     item.addEventListener(('dragend'), () => {
//         item.classList.remove("flying");
//     })
// })
// completed.addEventListener("click", () => {
//     console.log("button was clicked")
//     let input = prompt("what is your task");
//     console.log(input);
//     let item = document.createElement("div");
//     item.innerHTML = input;
//     item.classList.add('items')
//     const board = document.querySelector(".completed");
//     board.appendChild(item);
//     item.setAttribute('draggable', true);
//     item.addEventListener(('dragstart'), () => {
//         item.classList.add("flying");
//     })
//     item.addEventListener(('dragend'), () => {
//         item.classList.remove("flying");
//     })
// })

//this function is neccessary if you have hard coded items
// function draggable (){         //function to make all the items draggable 
//     const items = document.querySelectorAll(".items");
//     items.forEach((items)=> {                     //set all element to draggable 
//         items.setAttribute('draggable' , true);
//     })
// }

//i want to implement a function where dragstart add a new class and dragend will remove that class
// const allitems = document.querySelectorAll(".items");
// allitems.forEach((allitems) =>{
//     allitems.addEventListener(('dragstart') , () => {
//         allitems.classList.add("flying");
//     })
//     allitems.addEventListener(('dragend') , () => {
//         allitems.classList.remove("flying");
//     })
// })

//now i want to make the drop function 
