var session_seconds = "00";
var session_minutes = 25;
let first_time = 1;
var minutes_interval = null;
var seconds_interval = null;

// Audio files
let play_pause = 1;
var click_sound = new Audio("click.wav");
var bell = new Audio("end.wav");
// Starting template for the timer
function template() {
  document.getElementById("minutes").innerHTML = session_minutes;
  document.getElementById("seconds").innerHTML = session_seconds;
}

template();

function start_timer() {
    click_sound.play();
    // Change the minutes and seconds to starting time
    if (first_time === 1)
    {
      session_minutes = 24;
      session_seconds = 59;
      first_time = 0;
    }

    // Add the seconds and minutes to the page
    document.getElementById("minutes").innerHTML = session_minutes;
    document.getElementById("seconds").innerHTML = session_seconds;

    // Start the countdown
    if (play_pause === 1)
    {
      play_pause = 0;
      //minutes_interval = setInterval(minutesTimer, 60000);
      seconds_interval = setInterval(secondsTimer, 1000);
      
      // Function for minute counter
      function minutesTimer() {
        session_minutes = session_minutes - 1;
        document.getElementById("minutes").innerHTML = session_minutes;
      }

      // Function for second counter
      function secondsTimer() {
        session_seconds = session_seconds - 1;
        document.getElementById("seconds").innerHTML = session_seconds;

        // Check if the seconds and minutes counter has reached 0
        // If reached 0 then end the session
        if (session_seconds <= 0) {
          if (session_minutes <= 0) {
            // Clears the interval i.e. stops the counter
            //clearInterval(minutes_interval);
            clearInterval(seconds_interval);

            // Add the message to the html
            document.getElementById("done").innerHTML =
              "Session Over!! Take a Break";

            // Make the html message div visible
            document.getElementById("done").classList.add("show_message");

            // PLay the bell sound to tell the end of session
            bell.play();

            first_time = 1;
          }
          session_seconds = 60;
          session_minutes = session_minutes - 1;
          document.getElementById("minutes").innerHTML = session_minutes;
        }
      }
    }
    else{
      clearInterval(minutes_interval);
      clearInterval(seconds_interval);
      play_pause = 1;
      document.getElementById("minutes").innerHTML = session_minutes;
      document.getElementById("seconds").innerHTML = session_seconds;
    }
}