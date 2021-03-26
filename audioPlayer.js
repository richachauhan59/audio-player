
  var currentFile = "";

function progressBar() {
  var audioDemo = document.getElementById("myaudio");
  var elapsedTime = Math.round(audioDemo.currentTime);
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    ctx.fillStyle = "rgb(0,120,215)";
    var fWidth = (elapsedTime / audioDemo.duration) * canvas.clientWidth;
    if (fWidth > 0) {
      ctx.fillRect(0, 0, fWidth, canvas.clientHeight);
    }
  }
}
function playAudio() {
  try {
    var audioDemo = document.getElementById("myaudio");
    var btn = document.getElementById("play");

    var audioURL =
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

    if (audioURL !== currentFile) {
      audioDemo.src = audioURL;
      currentFile = audioURL;
    }

    if (audioDemo.paused) {
      audioDemo.play();
      btn.textContent = "Pause";
    } else {
      audioDemo.pause();
      btn.textContent = "Play";
    }
  } catch (e) {
    if (window.console && console.error("Error:" + e));
  }
}



function initEvents() {
  var canvas = document.getElementById("canvas");
  var audioDemo = document.getElementById("myaudio");

  audioDemo.addEventListener(
    "playing",
    function () {
      document.getElementById("play").textContent = "Pause";
    },
    true
  );

  audioDemo.addEventListener(
    "pause",
    function () {
      document.getElementById("play").textContent = "Play";
    },
    true
  );
  audioDemo.addEventListener("timeupdate", progressBar, true);
  canvas.addEventListener(
    "click",
    function (e) {
      var audioDemo = document.getElementById("myaudio");
      var canvas = document.getElementById("canvas");

      if (!e) {
        e = window.event;
      } 
      try {
        audioDemo.currentTime =
          audioDemo.duration * (e.offsetX / canvas.clientWidth);
      } catch (err) {
        if (window.console && console.error("Error:" + err));
      }
    },
    true
  );
}

window.addEventListener("DOMContentLoaded", initEvents, false);
