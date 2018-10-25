// <!-- when button is click we increase progress bar -->


function progress(){
  var el = document.getElementById('progress');
  var width = 1;
  var id = setInterval(frame, 100);
  // we will be calling frame function every 60 millisecond Interval
  function frame(){
    if(width >= 100){
      clearinterval(id);
      // if progress width is equal to 100 we will clear timer set..
      // clearinterval function takes id created by setInterval as ..
    }else{
      width++; // increase width
      el.style.width = width + '%'; // increase progress width
    }
  }
}
