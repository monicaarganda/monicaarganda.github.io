alert("Ahoy, Matey's... Can you play the game and win all my treasure or will you walk the plank?")

// After my treasure function is invoked, the html content to be replaced with an emoji
// // //Loser ---> ๐งจ  ---> id="0"
// //  /document.getElementById("0").innerHTML = "๐งจ"
// //
// // /Try again ---> ๐ดโโ ๏ธ ---> id="1"
// //  /document.getElementById("1").innerHTML = "๐ดโโ ๏ธ"
// //
// // Winner ---> ๐ฐ ---> id="2"
// //   /document.getElementById("2").innerHTML = "๐ฐ"
//
// // declare named treasureHunt
//

// const treasureHunt = (id) => {
//   if(id === "0") {
//     return document.getElementById("0").innerHTML = "๐งจ"
//   } else if(id === "1") {
//     return document.getElementById("1").innerHTML = "๐ดโโ ๏ธ"
//   } else if(id === "2") {
//     return document.getElementById("2").innerHTML = "๐ฐ"
//   } else if(id === "3") {
//     return document.getElementById("3").innerHTML = "๐ดโโ ๏ธ"
//   } else if(id === "4") {
//     return document.getElementById("4").innerHTML = "๐ฐ"
//   } else if(id === "5") {
//     return document.getElementById("5").innerHTML = "๐งจ"
//   } else if(id === "6") {
//     return document.getElementById("6").innerHTML = "๐ฐ"
//   } else if(id === "7") {
//     return document.getElementById("7").innerHTML = "๐งจ"
//   } else if(id === "8") {
//     return document.getElementById("8").innerHTML = "๐ดโโ ๏ธ"
//   }
// }

var bomb = Math.floor(Math.random()*9)
var rainbowTreasure = Math.floor(Math.random()*9)

console.log(rainbowTreasure, bomb)
if (rainbowTreasure === bomb) {
  bomb = Math.floor(Math.random()*9)
}
const treasureHunt = (location) => {
  if (location === bomb) {
    document.getElementById("outcome").innerHTML = ""
    alert ("Aye, time to walk the plank matey!");
    document.getElementById("bomb").innerHTML = "๐งจ"
  } else if (location === rainbowTreasure) {
    document.getElementById("outcome").innerHTML = "๐ฐ"
    alert ("You've won me treasure");
    document.getElementById("winner").innerHTML = "๐ฐ"
  } else if (rainbowTreasure !== location && bomb !== location) {
    document.getElementById(location).innerHTML = "๐ดโโ ๏ธ"
  }
}


// Money bag = treasure icon
// Red firecracker= bomb icon
// Turtle = turtle icon
