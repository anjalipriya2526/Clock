function selectMonth() {
   var acceptedMonth = document.getElementById("dropdownMenu");
}

function currentTime() {
  var date = new Date(); 
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var t = setTimeout(function(){ currentTime() }, 1000); 
  if(hour>=12) {
        document.getElementById("clock").innerHTML = updateTime(hour-12) + " : " + updateTime(min) + " : " + updateTime(sec) + " P.M.";
  } else {
        document.getElementById("clock").innerHTML = updateTime(hour) + " : " + updateTime(min) + " : " + updateTime(sec) + " A.M.";   
  }
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();
  var day = date.getDay();
  var dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  document.getElementById("Date").innerHTML = dayArray[day] + ", " + d + " " + monthArray[m] + ", " +y;
}

var form = document.getElementById("dateToDay");

form.addEventListener('submit',function() {
  var acceptedDate = (document.getElementById("d")).value;
  var acceptedMonth = (document.getElementById("dropdownMenu")).value;
  var acceptedYear = (document.getElementById("Year")).value;
  if(acceptedYear>999 && acceptedYear<=9999){
    if(acceptedDate>0 && acceptedDate <= checkDays(acceptedMonth, acceptedYear))
    { 
     var totalDate = new Date(acceptedYear,acceptedMonth,acceptedDate);
     var valueDay = totalDate.getDay();
     var dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     alert("The day for the given date is " + dayArray[valueDay] + ".");  
    }
    else {
     alert("The month you have entered has only " + checkDays(acceptedMonth, acceptedYear) + " days in the year " + acceptedYear + "." );
    }
  } else {
    alert("Please enter a valid year in four digits.");
  }
    
function checkDays(acceptedMonth,acceptedYear) {
    if(acceptedMonth==1){
      if((acceptedYear%4==0 && acceptedYear%100!=0) || acceptedYear%400==0)
      return 29;
      else
      return 28;      
    }
    if(acceptedMonth==0 || acceptedMonth==2 || acceptedMonth==4 || acceptedMonth==6 || acceptedMonth==7 || acceptedMonth==9 || acceptedMonth==11) {
      return 31;
    }
    if(acceptedMonth==3 || acceptedMonth==5 || acceptedMonth==8 || acceptedMonth==10) {
      return 30;
    }
}   
      
});

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

currentTime();