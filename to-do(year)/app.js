console.log("hello world")
let body = document.querySelector(".body");


for(let i=0 ; i<365 ; i++){
    let nd = document.createElement("div");
    nd.innerHTML = i
    nd.classList.add("days");
    nd.addEventListener("click" , () => {
        console.log("click registered  " + nd.innerHTML)
        nd.classList.add("days_ended");
        cpage(i)
        // let obj = ndate(i);
        // console.log( obj )
        // console.log(String(obj.month))
    })
    // nd.addEventListener("click" , () => {
    //     console.log("click registered  " + nd.innerHTML)
    //     nd.classList.add("days_ended")
    //     let num = i;
    //     for(let month of months){
    //     if(num < month.days){
    //         console.log(num+1 + " " +month.name)
    //         return {
    //             Month : month.name,
    //             Date : num+1
    //         }
    //     }
    //     num -= month.days;
    //     }
    // })
    body.appendChild(nd)
}

// let days = document.querySelector(".days")

// days.addEventListener("click" , () => {
//   console.log("click registered")
// })

const months = [
  { name: "January", days: 31 },
  { name: "February", days: 28 },
  { name: "March", days: 31 },
  { name: "April", days: 30 },
  { name: "May", days: 31 },
  { name: "June", days: 30 },
  { name: "July", days: 31 },
  { name: "August", days: 31 },
  { name: "September", days: 30 },
  { name: "October", days: 31 },
  { name: "November", days: 30 },
  { name: "December", days: 31 }
];

let ndate = function (num){
    for(let month of months){
        if(num < month.days){
            return {
                Month : month.name,
                Date : num
            }
        }
        num -= month.days;
    }
    return -1;
}



let cpage = function (Date){
    window.location.href = `page.html?Date=${Date}`;
}