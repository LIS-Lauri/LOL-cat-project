/*  exercise programmed by Laurentius Schell on 10/27/2017   */

var updateClock = function()
{
  var time;   /*  setting variable for use outside showCurrentTime() */
  var noon = 12;
  
  /*  getting the clock to show time  */
  var showCurrentTime = function()
  {
      // display the string on the webpage
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
  showCurrentTime();


  /*  showing a message and image depending on time   */
  /*var time = new Date().getHours();*/

  var evening = 18; // 6PM
  var wakeupTime = 9; // 9AM
  var lunchTime = 12; // 12PM
  var partyTime = 17; // 5PM
  var napTime = lunchTime + 2; // 2PM


  var messageText;
  var image;

  var timeEventJS = document.getElementById("timeEvent");
  var imageJS = document.getElementById("lolcat");

  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

  if (time == partyTime)
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

  timeEventJS.innerText = messageText;
  imageJS.src = image;
};
updateClock();

var oneSecond = 1000;
setInterval(updateClock, oneSecond);
