function remove() {
  const hunger = document.getElementById("hunger");

  let currentWidth = parseInt(hunger.style.width) || 0;
  let newWidth = Math.max(0, currentWidth - 20);

  hunger.style.width = newWidth + "%";
}

function removeH() {
  const hunger = document.getElementById("hunger");

  let currentWidth = parseInt(hunger.style.width) || 0;
  let newWidth = Math.max(0, currentWidth - 2);

  hunger.style.width = newWidth + "%";

  if (currentWidth <= 50) {
    hunger.style.backgroundColor = "red";
    sad();
  }
  else {
    hunger.style.backgroundColor = "green";
  }
  if (currentWidth <= 0) {
    dead();
  }
}

function removeT() {
  const thirst = document.getElementById("thirst");

  let currentWidth = parseInt(thirst.style.width) || 0;
  let newWidth = Math.max(0, currentWidth - 2);

  thirst.style.width = newWidth + "%";

  if (currentWidth <= 50) {
    thirst.style.backgroundColor = "red";
    sad();
  }
  else {
    thirst.style.backgroundColor = "green";
  }
  if (currentWidth <= 0) {
    dead();
  }
}

function removeR() {
  const rest = document.getElementById("rest");

  let currentWidth = parseInt(rest.style.width) || 0;
  let newWidth = Math.max(0, currentWidth - 1.5);

  rest.style.width = newWidth + "%";

  if (currentWidth <= 50) {
    rest.style.backgroundColor = "red";
    sad();
  }
  else {
    rest.style.backgroundColor = "green";
  }
  if (currentWidth <= 0) {
    dead();
  }
}

function removeHa() {
  const happiness = document.getElementById("happiness");

  let currentWidth = parseInt(happiness.style.width) || 0;
  let newWidth = Math.max(0, currentWidth - 3);
  let color = (getComputedStyle(happiness).backgroundColor);

  happiness.style.width = newWidth + "%";

  if (currentWidth <= 50) {
    happiness.style.backgroundColor = "red";
    sad()
  }
  else {
    happiness.style.backgroundColor = "green";
  }
  if (currentWidth <= 0) {
    dead();
  }
}

function hatch() {
  document.getElementById('hatch-button').style = "display:none;";

  animHunger();
  animThirst();
  animRest();
  animHappiness();

  setTimeout(hatchInterval, 1200);
  resetimg();
}

function hatchInterval() {
  setInterval(removeH, 2400);
  setInterval(removeT, 2600);
  setInterval(removeR, 2500);
  setInterval(removeHa, 2900);

}

function animHunger() {
  var elem = document.getElementById("hunger");
  var width = 2;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}

function animThirst() {
  var elem = document.getElementById("thirst");
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}
function animHappiness() {
  var elem = document.getElementById("happiness");
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}
function animRest() {
  var elem = document.getElementById("rest");
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}

function feed() {
  const hunger = document.getElementById("hunger");


  let currentWidth = parseInt(hunger.style.width) || 0;
  let newWidth = Math.min(100, currentWidth + 15);
  hunger.style.width = newWidth + "%"

  document.getElementById('img').src = "img/eat.png";
  setTimeout(resetimg, 1200);
}

function drink() {
  const thirst = document.getElementById("thirst");

  let currentWidth = parseInt(thirst.style.width) || 0;
  let newWidth = Math.min(100, currentWidth + 22);
  thirst.style.width = newWidth + "%"

  document.getElementById('img').src = "img/drink.png";

  setTimeout(resetimg, 1200);
}

function sleep() {
  const rest = document.getElementById("rest");

  let currentWidth = parseInt(rest.style.width) || 0;
  let newWidth = Math.min(100, currentWidth + 20);
  rest.style.width = newWidth + "%"

  document.getElementById('img').src = "img/sleep.png";

  setTimeout(resetimg, 2200);
}

function play() {
  const happiness = document.getElementById("happiness");

  let currentWidth = parseInt(happiness.style.width) || 0;
  let newWidth = Math.min(100, currentWidth + 20);
  happiness.style.width = newWidth + "%"

  document.getElementById('img').src = "img/play.png";

  setTimeout(resetimg, 1200);
}

function resetimg() {
  document.getElementById('img').src = "img/talk.png"
}

function sad() {
  document.getElementById('img').src = "img/sad.png"
}

function dead() {
  const hunger = document.getElementById('hunger');
  const thirst = document.getElementById('thirst');
  const rest = document.getElementById('rest');
  const happiness = document.getElementById('happiness');

  hunger.style.width = '0%';
  thirst.style.width = '0%';
  rest.style.width = '0%';
  happiness.style.width = '0%';

  document.getElementById('img').src = "img/dead.png";

}

