
// Display current day/time, updated each second
let currentDayTime = setInterval(function(){
    let currentDay = document.querySelector('#currentDay');
    let currentTime = document.querySelector('#currentTime');
    let event = document.querySelector('textarea');

    currentDay.innerHTML = moment().format('dddd MMMM Do YYYY');
    currentTime.innerHTML = moment().format('h:mm:ss');


}, 1000);

