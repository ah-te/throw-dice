document.querySelector("button").addEventListener("click", countScore)

function countScore() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var diceOne = "images/dice" + randomNumber + ".png";
    var images1 = document.querySelectorAll("img")[0].setAttribute("src", diceOne);





    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var diceTwo = "images/dice" + randomNumber2 + ".png";
    var images2 = document.querySelectorAll("img")[1].setAttribute("src", diceTwo);





    if (randomNumber > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 won"
    } else if (randomNumber2 > randomNumber) {
        document.querySelector("h1").innerHTML = "player 2 won"
    } else if (randomNumber === randomNumber2) {
        document.querySelector("h1").innerHTML = "Draw"
    }
}
// countScore();