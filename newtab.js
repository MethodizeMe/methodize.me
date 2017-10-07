class Time {
  constructor(hours, minutes, seconds, AMPM) {
    this.timeArray = [0, 0, 0, 0]
    this.date = new Date();
    this.timeArray[0] = hours || this.date.getHours();
    this.timeArray[1] = minutes || this.date.getMinutes();
    this.timeArray[2] = seconds || this.date.getSeconds();
    this.timeArray[3] = AMPM || "";
    if (this.timeArray[3] == "") {
      if (this.timeArray[0] > 12) {
        this.timeArray[0] -= 12;
        this.timeArray[3] = "PM";
      } else {
        this.timeArray[3] = "AM";
      }
    }
    if (this.timeArray[0] == 0) {
      this.timeArray[0] = 12;
    }
    for (var i = 1; i < this.timeArray.length - 1; i++) {
      if (this.timeArray[i].toString().length == 1) {
        this.timeArray[i] = "0" + this.timeArray[i].toString();
      }
      this.timeArray[i] = this.timeArray[i].toString();
    }
  }

  getAMPM() {
    return this.timeArray[3];
  }

  shortString() {
    return this.timeArray[0] + ":" + this.timeArray[1];
  }

  toString() {
    return this.timeArray[0] + ":" + this.timeArray[1] + ":" + this.timeArray[2] +  " " + this.timeArray[3];
  }
}

class Day {

}

class TimeBlock {
  constructor(startTime, endTime) {
    this.startTime = startTime;
    this.endTime = endTime;
  }
}

function openCloseNav() {
    if (document.getElementById("mySidenav").style.width == "250px") {
      document.getElementById("mySidenav").style.width = "0px";
      document.getElementById("menuButton").style.transform = "translate(16px, 16px) rotate(0deg)";
    } else {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("menuButton").style.transform = "translate(16px, 16px) rotate(90deg)";
    }
}

document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('menuButton');
  link.addEventListener('click', function() {
    openCloseNav();
  });
});

window.onload = setInterval(function() {
  time = new Time();

  //block = new TimeBlock(, );

  document.getElementById("time").innerHTML = time.shortString();

}, 200);