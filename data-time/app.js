const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const ampm = document.querySelector(".ampm");
const day = document.querySelector(".day");
const date_now = document.querySelector(".date-now");
const month_now = document.querySelector(".month-now");
const year_now = document.querySelector(".year-now");
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const time = function(){
    const d = new Date();
    const Hour = d.getHours() % 12;
    hour.innerHTML=Hour;
    minute.innerHTML=d.getMinutes();
    second.innerHTML=d.getSeconds();
   if(d.getHours() >= 12){
    ampm.innerHTML="PM";
    console.log("pm");
   }else{
    ampm.innerHTML="Am";
    console.log("am");
   }
   day.innerHTML=days[d.getDay()];

   date_now.innerHTML = d.getDate();
   month_now.innerHTML = d.getMonth();
   year_now.innerHTML = d.getFullYear();
}

setInterval(time , 1000);

time();