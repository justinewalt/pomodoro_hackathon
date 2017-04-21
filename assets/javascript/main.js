function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    // days and hours not needed at the moment
    // 'total': t,
    // 'days': days,
    // 'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  // days and hours not needed at the moment
  // var daysSpan = clock.querySelector('.days');
  // var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);
    // days and hours not needed at the moment
    // daysSpan.innerHTML = t.days;
    // hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

function resetClock (clock, endtime) {
    endtime = new Date(Date.parse(new Date()) + timeInMinutes*60*1000);
    new initializeClock('clockdiv', endtime);
    console.log(clock.value);
}

function startPause () {
    document.getElementById("startPause")
}

function restartTimer () {
    resetClock ();

}

var clock ;
var timeInMinutes = 25;
var currentTime = Date.parse(new Date());
var deadline = new Date(currentTime + timeInMinutes*60*1000);
(function(){
    clock = initializeClock('clockdiv', deadline);
})();
