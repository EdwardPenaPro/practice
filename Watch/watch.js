// let myName = document.getElementById("dateId");

// myName.innerText="Edward Pena";
// myName.style.color="Black"




// Clock function

function startTime(){
let timer=new Date();
let hh=timer.getHours();
let mm=timer.getMinutes();
let ss=timer.getSeconds();

hh=(hh<10)?"0"+hh:hh;
mm=(mm<10)?"0"+mm:mm;
ss=(ss<10)?"0"+ss:ss;

let time=hh+" : " +mm+" : "+ss;
document.getElementById("dateId").innerText=time;
setTimeout(function(){startTime()},1000);
}
startTime();

// digital watch
setInterval(myTimer, 1000);

function myTimer() {
const date = new Date();
document.getElementById("dateIdDigital").innerHTML = date.toLocaleTimeString();
}