/*  
 *  This is main JavaScript file.
 *  The clock.js file includes all scripts for the website working.
 */

// CLock function
function clock() {
    const hourEl = document.querySelector(".clock__hour")
    const minuteEl = document.querySelector(".clock__minute")

    let date = new Date()
    
    let dateHour = date.getHours()
    let dateMinute = date.getMinutes()
    let dateSecond = date.getSeconds()

    // Calculating movement ratio and setting proper degrees to clock hands
    let hourDeg = (((dateMinute / 60) + dateHour) / 12) * 360
    hourEl.style.transform = "rotate(" + hourDeg + "deg)"

    let minuteDeg = (((dateSecond / 60) + dateMinute) / 60) * 360
    minuteEl.style.transform = "rotate(" + minuteDeg + "deg)"
}

clock()
setInterval(clock, 1000)