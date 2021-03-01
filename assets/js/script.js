const currentDay = document.querySelector('#currentDay');
const currentTime = document.querySelector('#currentTime');
const appointmentInputs = document.querySelectorAll('textarea');
const saveButtons = document.querySelectorAll('div.save');

/******************************************
Display current day/time, updated each second, and update grid background colors based on current time
*******************************************/
let currentDayTimer = setInterval(function(){
    currentDay.innerHTML = moment().format('dddd MMMM Do YYYY');
    currentTime.innerHTML = moment().format('h:mm:ss');
    // update grid colors based on current time
    appointmentInputs.forEach(appointment => {
        if (appointment.dataset.hour < moment().hour()) {
            appointment.className = 'past';
        } else if (appointment.dataset.hour == moment().hour()) {
            appointment.className = 'present';
        } else {
            appointment.className = 'future';
        }
    })
}, 1000);

/******************************************
Write appointments into local storage when Save is clicked and change state of button
*******************************************/
document.addEventListener('click', (event) => {
    let hour2save = event.target.dataset.hour;
    let appt2save = $('textarea[data-hour = "'+hour2save+'"]').val(); // OMG, this took a DAY to figure out!

    if (event.target.classList.contains('save')) {
        console.log(`Hour = ${hour2save}, Appt = ${appt2save}`); // TESTING
        if (appt2save === "") {
            localStorage.removeItem(hour2save); // delete any empties
            event.target.classList.remove('stored');
        } else {
            localStorage.setItem(hour2save, appt2save);
            event.target.classList.add('stored');
        }
    }
}, false); // false to 'capturing' on way down DOM before bubbling back up

/******************************************
On page load, check if UserStorage holds values for appointments. If so, populate the textareas and change state of Save buttons.
*******************************************/
window.addEventListener('load', (event) => {
    appointmentInputs.forEach(appointment => {
        let hour2read = appointment.dataset.hour;
        let storedAppt = localStorage.getItem(hour2read);

        // let storedApptButton = $('div.save[data-hour = "'+hour2read+'"]');
        let storedApptButton = $('.save[data-hour = "'+hour2read+'"]');

        console.log(storedApptButton.classList);

        if (storedAppt !== null) { // if storage exists, restore
            appointment.value = storedAppt;
            // storedApptButton.classList.add('stored');
        }
    })
})
