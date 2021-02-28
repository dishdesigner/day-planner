const currentDay = document.querySelector('#currentDay');
const currentTime = document.querySelector('#currentTime');
const appointments = document.querySelectorAll('textarea');
const saveButtons = document.querySelectorAll('div.save');

/******************************************
Display current day/time, updated each second, and update grid background colors based on current time
*******************************************/
let currentDayTime = setInterval(function(){
    currentDay.innerHTML = moment().format('dddd MMMM Do YYYY');
    currentTime.innerHTML = moment().format('h:mm:ss');
    // update grid colors based on current time
    appointments.forEach(appointment => {
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
Write appointments into local storage when Save is clicked and change state of button when saved data exists
*******************************************/
function saveAppointment(event) {
    const appointment = appointments.find(appt => appt.dataset.hour === event.target.dataset.hour);
    appointment.JSON.stringify

}

saveButtons.addEventListener('click', saveAppointment);

/******************************************
On change of textarea input, remove .stored class state of Save button on that row to make it active again to invite Saving to local storage.
*******************************************/

/******************************************
On page load, check if UserStorage holds values for appointments. If so, populate the textareas and change state of Save buttons.
*******************************************/

