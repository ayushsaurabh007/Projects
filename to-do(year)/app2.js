console.log("hellow page")

const params = new URLSearchParams(window.location.search);
const dayIndex = parseInt(params.get("Date"),10)

console.log(dayIndex)

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

let dObj = ndate(dayIndex);
console.log(dObj.Date + "  " +dObj.Month)

let dateColumn = document.querySelector(".date");
let dateItem = document.createElement("p");
dateItem.innerHTML = dObj.Date + " " +dObj.Month;
dateColumn.appendChild(dateItem);
