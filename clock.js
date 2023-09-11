function showClock(){
    var todayDate = new Date();
    var hour = todayDate.getHours();
    var minute = todayDate.getMinutes();
    var second = todayDate.getSeconds();
    document.getElementById("display_clock").innerHTML = hour + ":" + minute + ":" +second;
}

setInterval(showClock,1000);


function showdateandtime(){
    document.getElementById("display_date_and_time").innerHTML=Date();
    }
var i=setInterval(showdateandtime,1000);
setTimmeout(function (){
    clearInterval(i);
},5000);

    