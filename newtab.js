window.onload = setInterval(function() {
  var date = new Date();

  var time = [date.getHours(), date.getMinutes(), date.getSeconds(), "AM"]

  if (time[0] > 12) {
    time[0] -= 12;
    time[3] = "PM";
  }

  for (var i = 1; i < time.length - 1; i++) {
    if (time[i].toString().length == 1) {
      time[i] = "0" + time[i];
    }
  }

  document.getElementById("time").innerHTML = time[0] + ":" + time[1] + ":" + time[2] +  " " + time[3];
}, 200);