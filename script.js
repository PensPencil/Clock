const secondHand = document.querySelector('.second');
const minsHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');
function time(){
let currDate = new Date();
let h = currDate.getHours();
let m = currDate.getMinutes();
let s = currDate.getSeconds();
const secondsDegrees = ((s / 60) * 360);
const minutesDegrees = ((m / 60) * 360);
const hoursDegrees = ((h / 12) * 360);
secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
minsHand.style.transform = `rotate(${minutesDegrees}deg)`;
hourHand.style.transform = `rotate(${hoursDegrees}deg)`;}
setInterval(time,1000);