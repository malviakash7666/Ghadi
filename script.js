let hr= document.getElementById('hour');
let min= document.getElementById('min');
let sec= document.getElementById('sec');

function displayTime(){
    let date = new Date();

    // Getting Hour Min Sec  from date 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotaion = 30*hh +mm/2;
    let mRoation = 6*mm;
    let sRotaion = 6*ss;
    hr.style.transform=`rotate(${hRotaion}deg)`
    min.style.transform=`rotate(${mRoation}deg)`
    sec.style.transform=`rotate(${sRotaion}deg)`

}
setInterval(displayTime,1000);
