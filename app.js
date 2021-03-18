const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const seconds = document.getElementById("seconds");
const meridiem = document.getElementById("meridiem");
let date;

showDate = () => {
    date = new Date();   // current Time & date

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    // add 0 as a prefix
    hr = (hr<10) ? '0' + hr : hr;
    min = (min<10) ? '0' + min : min;
    sec = (sec<10) ? '0' + sec : sec;

    // display the time
    hour.textContent = hr;
    minute.textContent = min;
    seconds.textContent = sec;
    meridiem.innerText = (hr<12) ? ' AM' : ' PM' ;  
    
    // let yr = date.getFullYear();
    // let mon = date.getMonth();
    // let dt = date.getDate();

    setTimeout(showDate, 1000);   // update the time
}

showDate();