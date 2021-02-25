// Display current day/time, updated each second
let currentDay = $('#currentDay');

setInterval(function() {
    currentDay.text(moment().format(YYYY-MM-DD hh:mm:ss));
}, 1000);



