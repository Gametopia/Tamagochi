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
}

function hatch() {
  const music = new Audio('audio/bgmusic.mp3')
  document.getElementById('hatch-button').style = "display:none;";

  animHunger();
  animThirst();
  animRest();
  animHappiness();

  music.play()

  setTimeout(hatchInterval, 1200);
  resetimg();
}

function hatchInterval() {

  let hungerinterval = setInterval(removeH, 2400);
  let thirstinterval = setInterval(removeT, 2600);
  let restinterval = setInterval(removeR, 2500);
  let playinterval =  setInterval(removeHa, 2900);
  let widthInterval = setInterval(getWidth, 1000);



  function getWidth(){ 
  const hunger = document.getElementById("hunger");
  let hungerWidth = parseInt(hunger.style.width) || 0;

  const thirst = document.getElementById("thirst");
  let thirstWidth = parseInt(thirst.style.width) || 0;

  const rest = document.getElementById("rest");
  let restWidth = parseInt(rest.style.width) || 0;

  const happiness = document.getElementById("happiness");
  let haWidth = parseInt(happiness.style.width) || 0;

    if (hungerWidth <= 0) {
    dead();
    clearInterval(hungerinterval);
    clearInterval(thirstinterval);
    clearInterval(restinterval);
    clearInterval(playinterval);
    clearInterval(widthInterval);
  }
    if (thirstWidth <= 0) {
    dead();
    clearInterval(hungerinterval);
    clearInterval(thirstinterval);
    clearInterval(restinterval);
    clearInterval(playinterval);
    clearInterval(widthInterval);
  }
    if (restWidth <= 0) {
    dead();
    clearInterval(hungerinterval);
    clearInterval(thirstinterval);
    clearInterval(restinterval);
    clearInterval(playinterval);
    clearInterval(widthInterval);
  }
    if (haWidth <= 0) {
    dead();
    clearInterval(hungerinterval);
    clearInterval(thirstinterval);
    clearInterval(restinterval);
    clearInterval(playinterval);
    clearInterval(widthInterval);
  }

  console.log(hungerWidth)
}

  


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
  const music = new Audio('audio/powerup1.mp3');
  const hunger = document.getElementById("hunger");


  let currentWidth = parseInt(hunger.style.width) || 0;
  let newWidth = Math.min(100, currentWidth + 15);
  hunger.style.width = newWidth + "%"

  music.play();

  document.getElementById('img').src = "img/eat.png";
  setTimeout(resetimg, 1200);
}

function drink() {
  const music = new Audio('audio/powerup1.mp3');
  const thirst = document.getElementById("thirst");

  let currentWidth = parseInt(thirst.style.width) || 0;
  let newWidth = Math.min(100, currentWidth + 22);
  thirst.style.width = newWidth + "%"

  music.play();

  document.getElementById('img').src = "img/drink.png";

  setTimeout(resetimg, 1200);
}

function sleep() {
  const music = new Audio('audio/powerup1.mp3');
  const rest = document.getElementById("rest");

  let currentWidth = parseInt(rest.style.width) || 0;
  let newWidth = Math.min(100, currentWidth + 20);
  rest.style.width = newWidth + "%"

  music.play();

  document.getElementById('img').src = "img/sleep.png";

  setTimeout(resetimg, 2200);
}

function play() {
  const music = new Audio('audio/powerup1.mp3');
  const happiness = document.getElementById("happiness");

  let currentWidth = parseInt(happiness.style.width) || 0;
  let newWidth = Math.min(100, currentWidth + 20);
  happiness.style.width = newWidth + "%"

  music.play();

  document.getElementById('img').src = "img/play.png";

  setTimeout(resetimg, 1200);
}

function resetimg() {
  document.getElementById('img').src = "img/talk.png";
}

function sad() {
  document.getElementById('img').src = "img/sad.png";
}

function dead() {
  const music = new Audio('audio/death.mp3');
  const hunger = document.getElementById('hunger');
  const thirst = document.getElementById('thirst');
  const rest = document.getElementById('rest');
  const happiness = document.getElementById('happiness');

  document.getElementById('buttons').style.display = 'none'


  music.play();

  hunger.style.width = '0%';
  thirst.style.width = '0%';
  rest.style.width = '0%';
  happiness.style.width = '0%';

  document.getElementById('img').src = "img/dead.png";


}

