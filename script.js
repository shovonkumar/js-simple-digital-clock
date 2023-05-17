
function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    //AM PM 
    var ampm;
    if (hours >= 12) {
      ampm = 'PM';
    } else {
      ampm = 'AM';
    }

    // 12 Hour Formatting
    if (hours > 12) {
        hours = hours - 12;
    } else if (hours === 0) {
        hours = 12;
    }
  
    // adding a '0' before a single digit
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

  
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    document.getElementById('ampm').innerText = ampm;

}

  // Border Color Change

function borderToggle() {
    const clock = document.getElementById("clock");
    clock.classList.toggle("border-change");
}

setInterval(updateClock, 1000);
setInterval(borderToggle, 500);


