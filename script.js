$(function() {

  var DEGREES_PER_HOUR = 360/24;
  
  function updateClock() {
    // assume 0:00 is 0 degrees
    // get time in UTC/GMT
    var date = new Date();
    var hours = date.getUTCHours();
    var minutes = date.getUTCMinutes();

    // get degrees per hour
    var hDegrees = hours * DEGREES_PER_HOUR;
    var mDegrees = minutes/60 * DEGREES_PER_HOUR;
    var degrees = hDegrees + mDegrees + 15;
    

    // rotate map by degrees
    $('.map').css({ rotate: degrees });
  }

  updateClock();
  
  window.setInterval(function(){
    updateClock();
  }, 30000);

});
