// 	exercise programmed by Laurentius Schell beginning 10/28/2017

var clickButton = document.getElementById("partyTimeButton");
var isPartyTime = false;
var partyTime = 17; // 5PM
var noon = 12;
var oneSecond = 1000;
var time; 	/* 	setting variable for use outside showCurrentTime() */

/* 	getting the clock to show time 	*/
var showCurrentTime = function()
{
    // creat the string to display
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    time = hours; /* saved for use in message and image */
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

setInterval(showCurrentTime, oneSecond);



//****************************************************
// 	shwoing a message and image depending on hour
var showMessage = function()
{
	//var time = new Date().getHours();
	var noon = 12;
	var evening = 18; // 6PM
	var wakeupTime = 9; // 9AM
	var lunchTime = 12; // 12PM
	var napTime = lunchTime + 2; // 2PM

	var messageText;
	var image;

	var timeEventJS = document.getElementById("timeEvent");
	var imageJS = document.getElementById("lolcat");

	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

	if ((time == partyTime)||(isPartyTime))
		{
			messageText = "IZ PARTEE TIME!!";
			image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
		}
	else if (time == napTime)
		{
			messageText = "IZ NAP TIME…";
			image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
		}
	else if (time == lunchTime)
		{
		    messageText = "IZ NOM NOM NOM TIME!!";
			image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
		}
	else if (time == wakeupTime)
		{
		    messageText = "IZ TIME TO GETTUP.";
			image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
		}
	else if (time < noon)
		{
			messageText = "Good morning!";
		}
	else if (time > evening)
		{
			messageText = "Good Evening!";
		}
	else
		{
			messageText = "Good afternoon!";
		}
	//display the message and image determined in the IF THEN sequence
	timeEventJS.innerText = messageText;
	imageJS.src = image;
};
setInterval(showMessage, oneSecond);


//**********************************
// 	party time button functionality


var partyEvent = function() {
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      clickButton.innerText = "Party Over";
      clickButton.style.backgroundColor = "#0A8DAB";
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      clickButton.innerText = "Party Time!";
      clickButton.style.backgroundColor = "#222";
   }
};
clickButton.addEventListener("click", partyEvent);
