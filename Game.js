//          FOR PLAYER 1

// generating random number from 1 to 6
let randomnumberone = Math.floor(Math.random() * 6) + 1
// Gentrating random Dice from Src
let randomdiceone = "./Images/dice" + randomnumberone + ".png"
let dice1 = document.querySelectorAll("img")[0]
dice1.setAttribute("src", randomdiceone)

//          FOR PLAYER 2
// generating random number from 1 to 6
let randomnumbertwo = Math.floor(Math.random() * 6) + 1
// Gentrating random Dice from Src
let randomdicetwo = "./Images/dice" + randomnumbertwo + ".png"
let dice2 = document.querySelectorAll("img")[1]
dice2.setAttribute("src", randomdicetwo)


//          WHO WINS
//          FOR PLAYER 1
if (randomdiceone > randomdicetwo) {
    document.querySelector("h1").innerHTML = "PLAYER 1 WON"
} else if (randomdiceone < randomdicetwo) {
    document.querySelector("h1").innerHTML = "PLAYER 2 WON"
} else {
    document.querySelector("h1").innerHTML = "Its Draw"
}
