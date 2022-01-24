let gameData = {
    "player":{"div":"player-box"},
    "computer":{"div":"comp-box"},
    "cards":["A","2","3","4","5","6","7","8","9","10","K","Q","J"],
}



function mainGame(){
    randomNumberGenerator()
    console.log("card number is", playerCard)
    showCard(playerCard)
}

function showCard(card){
    let playerBox = document.querySelector("div.player-box");
    let img = document.createElement("img");
    img.src = 'images/${card}.png';
    img.setAttribute("class", "cardimage")
    playerBox.append(img)
    
}

function randomNumberGenerator(){
    let cardNumber = Math.floor(Math.random() * 13)
    playerCard = gameData["cards"][cardNumber]
    console.log(playerCard)
}