// Global variable to control setTimeout function
var timer;

function enableStartButton() {
    // Function to enable start button

    // Enable start button
    document.getElementById("start-button").disabled = false;
}

function enableStopButton() {
    // Function to enable stop button

    // Enable stop button
    document.getElementById("stop-button").disabled = false;
}

function enableContinueButton() {
    // Function to enable continue button

    // Enable continue button
    document.getElementById("continue-button").disabled = false;
}

function enableResetButton() {
    // Function to enable reset button

    // Enable reset button
    document.getElementById("reset-button").disabled = false;
}

function enableRecordButton() {
    // Function to enable record button

    // Enable record button
    document.getElementById("record-button").disabled = false;
}

function disableStartButton() {
    // Function to disable start button

    // Disable start button
    document.getElementById("start-button").disabled = true;
}

function disableStopButton() {
    // Function to disable stop button

    // Disable stop button
    document.getElementById("stop-button").disabled = true;
}

function disableContinueButton() {
    // Function to disable continue button

    // Disable continue button
    document.getElementById("continue-button").disabled = true;
}

function disableResetButton() {
    // Function to disable reset button

    // Disable rest button
    document.getElementById("reset-button").disabled = true;
}

function disableRecordButton() {
    // Function to disable record button

    // Disable record button
    document.getElementById("record-button").disabled = true;
}

function setupTimer() {
    // Function to setup timer

    // Enable stop and record buttons
    enableStopButton();
    enableRecordButton();

    // Disable start, continue and reset buttons
    disableStartButton();
    disableContinueButton();
    disableResetButton();

    // Set second display to -1 (To make sure the display is correct)
    document.getElementById("second-display").textContent = "-1";
    //Function call to start timer
    startTimer();
}

function stopTimer() {
    // Function to stop timer

    // Clear/stop setTimeout Function
    clearTimeout(timer);

    //Enable continue and reset button
    enableContinueButton();
    enableResetButton();

    // Disable start, stop and record button
    disableStartButton();
    disableStopButton();
    disableRecordButton();
}

function continueTimer() {
    // Function to continue timer

    // Enable stop and record button
    enableStopButton();
    enableRecordButton();

    // Disable start, continue and reset button
    disableStartButton();
    disableContinueButton();
    disableResetButton();

    // Function call to start/run timer
    startTimer();
}

function resetTimer() {
    // Function to reset timer

    // Set second, minute and hour to 0
    setSecondToZero();
    setMinuteToZero();
    setHourToZero();

    // Enable start button
    enableStartButton();

    // Disable stop, continue, reset and record button
    disableStopButton();
    disableContinueButton();
    disableResetButton();
    disableRecordButton();

    // Reset user's record list
    document.getElementById("record-list").innerHTML = "";
}

function recordTimer() {
    // Function to record time

    // Create record of timer
    var record = createRecord();
    // Add record to user's record list
    addNewRecord(record);

}

function createRecord() {
    // Function to create a record

    // Get current second, minute and hour
    var currentSecond = getCurrentSecond().toString();
    var currentMinute = getCurrentMinute().toString();
    var currentHour = getCurrentHour();

    // Adjust display of second, minute and hour
    currentSecond = adjustDisplay(currentSecond);
    currentMinute = adjustDisplay(currentMinute);
    currentHour = adjustDisplay(currentHour);

    // Create number of record
    var currentRecordNumber = document.getElementById("record-list").childNodes.length + 1;

    // Create record as a string
    var record = "Record " + currentRecordNumber + ": " + currentHour + ":" + currentMinute + ":" + currentSecond;
    // Return record created
    return record;
}

function addNewRecord(record) {
    // Function to add given record to user's record list

    // Create new H3 tag
    var newRecord = document.createElement("H3");
    // Add record to H3 tag
    newRecord.innerHTML = record;

    // Get user's current list
    var currentList = document.getElementById("record-list");
    // Insert H3 to list at the top of list
    currentList.insertBefore(newRecord, currentList.childNodes[0]);
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

function getCurrentSecond() {
    // Function to get current second

    // Get current second as a Number
    var currentSecond = Number(document.getElementById("second-display").textContent);
    // Return current second
    return currentSecond;
}

function incrementSecondByOne() {
    // Function to increment second by 1

    // Get current second
    var currentSecond = getCurrentSecond();
    // Increase current second by 1
    currentSecond += 1;
    // Adjust display of second
    currentSecond = adjustDisplay(currentSecond);
    // Set new second to display
    document.getElementById("second-display").textContent = currentSecond;
}

function setSecondToZero() {
    // Function to set second to zero

    // Set second to 00
    document.getElementById("second-display").textContent = "00";
}

function getCurrentMinute() {
    // Function to get current minute

    // Get current minute as a Number
    var currentMinute = Number(document.getElementById("minute-display").textContent);
    // Return current minute
    return currentMinute;
}

function incrementMinuteByOne() {
    // Function to increase minute by 1

    // Get current minute
    var currentMinute = getCurrentMinute();
    // Increase current minute by 1
    currentMinute += 1;
    // Adjust display of minute
    currentMinute = adjustDisplay(currentMinute);
    // Set new minute to display
    document.getElementById("minute-display").textContent = currentMinute;
}

function setMinuteToZero() {
    // Function to set minute to zero

    // Set minute to 00
    document.getElementById("minute-display").textContent = "00";
}

function getCurrentHour() {
    // Function to get current hour

    // Get current hour
    var currentHour = Number(document.getElementById("hour-display").textContent);
    // Return current hour
    return currentHour;
}

function incrementHourByOne() {
    // Function to increase hour by 1

    // Get current hour
    var currentHour = getCurrentHour();
    // Increase current hour by 1
    currentHour += 1;
    // Adjust display of hour
    currentHour = adjustDisplay(currentHour);
    // Set new hour to display
    document.getElementById("hour-display").textContent = currentHour;
}

function setHourToZero() {
    // Function to set hour to zero

    // Set hour to 00
    document.getElementById("hour-display").textContent = "00";
}

function startTimer() {
    // Function to start/run timer

    // Get current second
    var currentSecond = getCurrentSecond();
    // If current second is less than 59
    if (currentSecond < 59) {
        // Increase second by 1
        incrementSecondByOne();
    } else {
        // Else set second to 0
        setSecondToZero();
        // Get current minute
        var currentMinute = getCurrentMinute();
        // If current minute is less than 59
        if (currentMinute < 59) {
            // Increase minute by 1
            incrementMinuteByOne();
        } else {
            // Else set minute to 0
            setMinuteToZero();
            // Increase hour by 1
            incrementHourByOne();
        }
    }

    // Wait 1 second to call function again
    timer = setTimeout(function(){ startTimer() }, 1000);
}