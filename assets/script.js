
// Displays the day of the week in header
$("#currentDay").text(moment().format('dddd, MMMM Do'));

// Dynamically changing live time at top of page
var updateTime = function() {
  document.getElementById("currentClock")
  .innerHTML = moment().format('hh:mm:ss a');
}
setInterval(updateTime, 1000);

// Assigning hours 9am-5pm in 24hr format
const hoursInDay = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// Formats time into 24hr and into a number vs string
let currentTime = parseInt(moment().format('HH'));

// Determines color of timeslot based on the time of day
function timeSlot() {

  for (let i = 0; i < hoursInDay.length; i++) {
    if (hoursInDay[i] > currentTime) {
      $(`#${hoursInDay[i]}`).addClass("future");
    } else if (hoursInDay[i] === currentTime) {
      $(`#${hoursInDay[i]}`).addClass("present");
    } else {
      $(`#${hoursInDay[i]}`).addClass("past");
    }
  }
  return;
};

// Calling functions
timeSlot();
updateTime();




console.log(currentTime);




// Turns 24 time into 12 hour
currentTime = parseInt(moment().format('h A'));
console.log(currentTime);

