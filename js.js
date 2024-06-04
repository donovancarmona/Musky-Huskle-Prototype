document.addEventListener("DOMContentLoaded", function () {
  // Tutorial
  var tmodalbg = document.getElementById("tutorialModal");
  var modaltutorial = document.getElementById("tutorialModalBox");
  var tbtn = document.getElementById("tutorialButton");
  var tspan = document.getElementsByClassName("close-button")[1];

  tbtn.onclick = function () {
    tmodalbg.classList.add("show");
    modaltutorial.classList.add("show");
    document.body.classList.add("block-scroll");
  };

  tspan.onclick = function () {
    tmodalbg.classList.remove("show");
    modaltutorial.classList.remove("show");
    document.body.classList.remove("block-scroll");
  };

  //   Config
  var cmodalbg = document.getElementById("configModal");
  var modalconfig = document.getElementById("configModalBox");
  var cbtn = document.getElementById("configButton");
  var cspan = document.getElementsByClassName("close-button")[0];

  cbtn.onclick = function () {
    cmodalbg.classList.add("show");
    modalconfig.classList.add("show");
  };

  cspan.onclick = function () {
    cmodalbg.classList.remove("show");
    modalconfig.classList.remove("show");
  };

  // Modal

  window.onclick = function (event) {
    switch (event.target) {
      case tmodalbg:
        tmodalbg.classList.remove("show");
        modaltutorial.classList.remove("show");
        document.body.classList.remove("block-scroll");
        break;
      case cmodalbg:
        cmodalbg.classList.remove("show");
        modalconfig.classList.remove("show");
        document.body.classList.remove("block-scroll");
        break;
    }
  };

  // Timer

  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  // Set the date we're counting down to
  var countDownDate = new Date(tomorrow).setHours(24, 0, 0, 0);
  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Format numbers with leading zeros if needed
    hours = formatTime(hours);
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);

    // Display the result in the element with id="demo"
    document.getElementById("timer-timer").innerHTML =
      hours + ":" + minutes + ":" + seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer-timer").innerHTML = "F5";
    }
  }, 1000);

  // Function to format time with leading zeros
  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }

  // Main game add row

  var submitbtn = document.getElementById("duplicabtn");
  var gamerow = document.getElementById("duplicateRow");

  submitbtn.addEventListener("click", function () {
    var clonedRow = gamerow.cloneNode(true);

    document
      .getElementById("maingame")
      .insertAdjacentElement("afterbegin", clonedRow);
  });
});
