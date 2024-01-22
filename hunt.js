alert("Ahoy, Matey's... Can you play the game and win all me treasure or will you walk the plank?")


var treasureLocation = Math.floor(Math.random()*9)
var bombLocation = Math.floor(Math.random()*9)

if(treasureLocation === bombLocation){
  bombLocation = Math.floor(Math.random() * 9)
}

var counter = 5

const treasure = (location) => {
  counter = counter - 1
  document.getElementById("counter").innerHTML = `Turns remaining: ${counter}`


  if(treasureLocation === location){
    document.getElementById("outcome").innerHTML = "🥷🏽💰Argh you WON and gotten away with me treasure💰🥷🏽"
    document.getElementById("gameboard").innerHTML = ""
    document.getElementById("counter").innerHTML = ""
  }
  else if(bombLocation === location){
    document.getElementById("outcome").innerHTML = "🧨 You lose, now you must walk me plank 🧨"
    document.getElementById("gameboard").innerHTML = ""
    document.getElementById("counter").innerHTML = ""
  }
  else if(counter === 0){
    document.getElementById("outcome").innerHTML = "🏴‍☠️You've ran out of tries, you lose🏴‍☠️"
    document.getElementById("gameboard").innerHTML = ""
    document.getElementById("counter").innerHTML = ""
  }
  else if(treasureLocation !== location && bombLocation !== location){
    document.getElementById(location).innerHTML = "❌"
  }
}