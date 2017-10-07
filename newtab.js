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

  getTime() {
    return this.timeArray;
  }

  getHours() {
    return this.timeArray[0];
  }

  getMinutes() {
    return this.timeArray[1];
  }

  getSeconds() {
    return this.timeArray[2];
  }

  getAMPM() {
    return this.timeArray[3];
  }

  shortString() {
    return this.timeArray[0] + ":" + this.timeArray[1] + " " + this.timeArray[3];
  }

  toString() {
    return this.timeArray[0] + ":" + this.timeArray[1] + ":" + this.timeArray[2] +  " " + this.timeArray[3];
  }
}

class TimeBlock {
  constructor(startTime, endTime) {
    this.startTime = startTime;
    this.endTime = endTime;
  }

  getStartTime() {
      return startTime;
  }

  getEndTime() {
      return endTime;
  }
}

function openCloseNav() {

    if (document.getElementById("mySidenav").style.width == "250px") {
      document.getElementById("mySidenav").style.width = "0px";
      document.getElementById("main").style.marginLeft= "0px";
    } else {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('menuButton');
    link.addEventListener('click', function() {
        openCloseNav();
    });
});

window.onload = setInterval(function() {
  var date = new Date();

  time = new Time();

  //block = new TimeBlock(, );

  document.getElementById("time").innerHTML = time.shortString();

  CanvasJS.addColorSet("clockColors",
     [
     "#0061ff",
     "#ffae00",
  ]); 

  /*var chart = new CanvasJS.Chart("chartContainer", {
    //animationEnabled: true,
    colorSet:  "clockColors",
    data: [{
      type: "pie",
      startAngle: 270,
      yValueFormatString: "##0.00\" Minutes Left\"",
      dataPoints: [
        {y: (time.getHours() * 60) + (time.getMinutes()) + (time.getSeconds() / 60)},
        {y: 800 - (time.getHours() * 60) + (time.getMinutes()) + (time.getSeconds() / 60)},
      ]
    }]
  });
  chart.render();*/

}, 200);