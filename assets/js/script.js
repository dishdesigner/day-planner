
// Display current day/time, updated each second
let currentDayTime = setInterval(function(){
    let currentDay = document.querySelector('#currentDay');
    let currentTime = document.querySelector('#currentTime');
    let appointments = document.querySelectorAll('textarea');

    currentDay.innerHTML = moment().format('dddd MMMM Do YYYY');
    currentTime.innerHTML = moment().format('h:mm:ss');

    appointments.forEach(appointment => {
        // console.log(appointment.dataset.hour);
        // console.log(moment('HH'));
        if (appointment.dataset.hour < moment().hour()) {
            appointment.className = 'past';
        } else if (appointment.dataset.hour == moment().hour()) {
            appointment.className = 'present';
        } else {
            appointment.className = 'future';
        }
    })
}, 1000);