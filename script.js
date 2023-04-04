function updateClock() {
    // Get the current time
    let currentTime = new Date();
  
    // Extract hours, minutes, and seconds from the current time
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
  
    // Format hours, minutes, and seconds as two digits with leading zeros
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
    // Build the formatted time string
    let formattedTime = hours + ":" + minutes + ":" + seconds;
  
    // Display the formatted time in the clock div
    let clockDiv = document.getElementById("clock");
    clockDiv.innerText = formattedTime;
  }
  
  // Call the updateClock function once to initialize the clock
  updateClock();
  
  // Call the updateClock function every second to update the clock
  setInterval(updateClock, 1000);
  