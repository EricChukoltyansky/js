let output = document.getElementById("stopwatch");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let ms = 0;
let sec = 0;
let min = 0;

let timerObj = {

  timer: function () {
    ms++;
    if (ms >= 100) {
      sec++;
      ms = 0;
    }
    if (sec === 60) {
      min++;
      sec = 0;
    }
    if (min === 60) {
      ms, sec, (min = 0);
    }

    let milli = ms < 10 ? `0` + ms : ms;
    let seconds = sec < 10 ? `0` + sec : sec;
    let minute = min < 10 ? `0` + min : min;

    let timer = `${minute}:${seconds}:${milli}`;
    output.innerHTML = timer;
  },

  start: function () {
   console.log(timerObj.timer(this))
    time = setInterval(timerObj.timer, 10);
    console.log("start");
  },

  stop: function () {
    clearInterval(time);
    
  },

  reset: function () {
    ms = 0;
    sec = 0;
    min = 0;
    // console.log("reset");
    output.innerHTML = `00:00:00`;
  },
};

startBtn.addEventListener("click", timerObj.start);
stopBtn.addEventListener("click", timerObj.stop);
resetBtn.addEventListener("click", timerObj.reset);
