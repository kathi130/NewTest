function checkRefresh() {
    if (!sessionStorage.getItem("rollDice")) {
      sessionStorage.setItem("rollDice", "extra")
   
    } else(
      rollTheDice()
    )
   
  }
   
  function rollTheDice() {
        
var dicee=Math.random();
dicee=dicee*6;
dicee=Math.floor(dicee)+1;


document.querySelector("img.img1").setAttribute("src","images/dice"+dicee+".png");


var dicee2=Math.random();
dicee2=dicee2*6;
dicee2=Math.floor(dicee2)+1;


document.querySelector("img.img2").setAttribute("src","images/dice"+dicee2+".png");


if (dicee > dicee2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!"
}

else if (dicee < dicee2) {
        document.querySelector("h1").innerHTML = "Player 2 wins! 🚩"
}

else {
    document.querySelector("h1").innerHTML = "🚩 Both are winners! 🚩"
}

}
