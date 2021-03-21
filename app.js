const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const seconds = document.getElementById("seconds");
const displayTime = document.getElementById("displayTime");
let date;
let meridiem;

showDate = () => {
    date = new Date();   // current Time & date

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let yr = date.getFullYear();
    let mon = date.getMonth();
    let dy = date.getDate();

    
    // add 0 as a prefix
    hr = (hr<10) ? '0' + hr : hr;
    min = (min<10) ? '0' + min : min;
    sec = (sec<10) ? '0' + sec : sec;
    meridiem = (hr<12) ? ' AM' : ' PM' ;  
    // displaly the time
    displayTime.innerHTML = `${hr}:${min}:${sec} ${meridiem}`;
    // display the date
    displayDate.innerHTML = `${yr}-${mon}-${dy}`;

    setTimeout(showDate, 1000);   // update the time
}

showDate();