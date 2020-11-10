// Global variable to control setTimeout function
var timer;

function setupTimer() {
    // Function to setup timer and adjust interface

    // Function call to set timer
    setTimerDisplay();
    // Function call to start timer
    startTimer();
    // Disable start button
    document.getElementById("start-button").disabled = true;
    // Disable minute dropdown
    document.getElementById("minutes").disabled = true;
    // Enable reset button
    document.getElementById("reset-button").disabled = false;
}

function adjustDisplay(number) {
    // Function to adjust display for the given number

    // Create variable to store output
    var display;
    // If number is less than 10
    if (number < 10) {
        // Add 0 to front of number
        display = "0" + number;
    } else {
        // Else make no change to number
        display = number;
    }
    // Return display
    return display;
}

function setTimerDisplay() {
    // Function to set timer display

    // Get Select tag
    var minuteDisplay = document.getElementById("minutes");
    // Get minute selected and subtract 1 to correct display
    var minuteSelected = Number(minuteDisplay.options[minuteDisplay.selectedIndex].text)-1;

    // Adjust minute to display
    minuteSelected = adjustDisplay(minuteSelected);

    // Set minute to display
    document.getElementById("minute-display").textContent = minuteSelected;
    // Set 60 seconds to display
    document.getElementById("second-display").textContent = "60";
}

function checkSecond(second) {
    // Function to check current second

    // Variable to store second to return
    var result = second;

    // If second is less than 0
    if (second < 0) {
        // Set result to 59
        result = 59;
        // Subtract 1 from minutes
        var minuteReduced = Number(document.getElementById("minute-display").textContent)-1;
        // Adjust minute to display
        minuteReduced = adjustDisplay(minuteReduced);
        // Set minute to display
        document.getElementById("minute-display").textContent = minuteReduced;
    }
    // Return result
    return result;
}

function checkTimer() {
    // Function to check if timer is down

    // Boolean variable to determine if timer is down
    var checkTimerToStop = false;

    // Get current minute
    var currentMinute = Number(document.getElementById("minute-display").textContent);
    // Get current second
    var currentSecond = Number(document.getElementById("second-display").textContent);
    // If current minute and second are both 0
    if (currentMinute == 0 && currentSecond == 0) {
        // Set checkTimerToStop to true
        checkTimerToStop = true;
    }
    // Return variable to determine if timer stopped
    return checkTimerToStop;
}

function startTimer() {
    // Function to start/run timer

    // Check if timer is done
    var stopTimer = checkTimer();
    // If timer is done
    if (stopTimer) {
        // Reset timer and interface
        resetTimer();
        // Display message to user
        alert("Timer is done");
    } else {
        // Else get current second
        var currentSecond = Number(document.getElementById("second-display").textContent);
        // Subtract 1 from current second
        currentSecond -= 1;
        // Check value of current second
        currentSecond = checkSecond(currentSecond);
        // Adjust display of current second
        currentSecond = adjustDisplay(currentSecond);
        // Set value of current second to display
        document.getElementById("second-display").textContent = currentSecond;
        // Wait 1 second to call function again
        timer = setTimeout(function(){ startTimer() }, 1000);
    }
}

function resetTimer() {
    // Function to reset timer and interface

    // Clear setTimeout function
    clearTimeout(timer);
    // Enable start button
    document.getElementById("start-button").disabled = false;
    // Enable minutes dropdown
    document.getElementById("minutes").disabled = false;
    // Disable reset button
    document.getElementById("reset-button").disabled = true;
}