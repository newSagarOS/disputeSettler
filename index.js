var randomNumber1 = Math.floor(Math.random()*6 + 1);

var randDice1 = "images/" + "dice" + randomNumber1 + ".png"

document.querySelectorAll("img")[0].setAttribute("src", randDice1);

var randomNumber2 = Math.floor(Math.random()*6 + 1);

var randDice2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randDice2);

if( randDice1 > randDice2) {
  document.querySelector("h1").innerHTML = "🚩Player1 Wins";
}
else if (randDice1 < randDice2) {
  document.querySelector("h1").innerHTML = "Player2 Wins🚩";
}
else {
  document.querySelector("h1").innerHTML = "It's a Draw!";
}
