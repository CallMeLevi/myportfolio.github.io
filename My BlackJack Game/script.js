let gameData = {
    "player1":{"div":"#player1-box", "score":0, "playerscore":"#player1-score", "winstatus":0},
    "player2":{"div":"#player2-box", "score":0, "playerscore":"#player2-score", "winstatus":0},
    "cards":["A","2","3","4","5","6","7","8","9","10","K","Q","J"],
    "cardsvalues":{"A":1, "2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9, "10":10, "J":11, "Q":12, "K":13},
    "player1wins":0,
    "player2wins":0,
    "draws":0
}


const PLAYER1 = gameData["player1"];
const PLAYER2 = gameData["player2"];
const PLAYER3 = gameData["cards"]



function showCard(card, player){
    let playerBox = document.querySelector(player["div"]);
    let img = document.createElement("img");
    img.src = `images/${card}.png`;
    img.setAttribute("class", "cardimage");
    playerBox.append(img);
    
}

// This function generates random numbers to give us random cards
function randomNumberGenerator(){
    let cardNumber = Math.floor(Math.random() * 13);
    playerCard = gameData["cards"][cardNumber];
}


function firstPlayer(){
    randomNumberGenerator();
    showCard(playerCard, PLAYER1);
    let yourScore = gameData["cardsvalues"][playerCard];
    scoreUpdate(PLAYER1, yourScore);
}

function secondPlayer(){
    randomNumberGenerator();
    showCard(playerCard, PLAYER2);
    let yourScore = gameData["cardsvalues"][playerCard];
    scoreUpdate(PLAYER2, yourScore);
}

function scoreUpdate(activePlayer, score){
    activePlayer["score"] = activePlayer["score"] += score;
    console.log(activePlayer["score"])
    let updatedScore = activePlayer["score"]
    showScore(activePlayer, updatedScore);
}

function showScore(activePlayer, score){
    document.querySelector(activePlayer["playerscore"]).textContent = score;
}

function winnerDecision(){
    let p1score = document.querySelector(PLAYER1["playerscore"]).textContent;
    let p2score = document.querySelector(PLAYER2["playerscore"]).textContent;

    let winner;

    if(p1score <= 21 && p2score <= 21){
        if(p1score < p2score){
            winner = PLAYER2;
            console.log(winner)
        }
        else if(p1score > p2score){
            winner = PLAYER1;
            console.log(winner);
        }
        else if(p1score === p2score){
            let winner = PLAYER3;
            console.log(winner);
        }
    }
    else if(p1score > 21 && p2score > 21){
        let p1final = p1score - 21;
        let p2final = p2score - 21;

        if(p1final < p2final){
            winner = PLAYER1;
            console.log(winner);
        }
        else if(p1final > p2final){
            winner = PLAYER2;
            console.log(winner)
        }
        else if(p1final === p2final){
            let winner = PLAYER3;
            console.log(winner);
        }
    }
    else if(p1score <= 21 && p2score > 21){
        let p1final = 21 - p1score;
        let p2final = p2score - 21;
        console.log(p1final)
        console.log(p2final)

        if(p1final < p2final){
            winner = PLAYER1;
            console.log(winner);
        }
        else if(p1final > p2final){
            winner = PLAYER2;
            console.log(winner)
        }
        else if(p1final === p2final){
            let winner = PLAYER3;
            console.log(winner);
        }
    }
    else if(p1score > 21 && p2score <= 21){
        let p1final = p1score - 21;
        let p2final = 21 - p2score;
        
        if(p1final < p2final){
            winner = PLAYER1;
            console.log(winner);
        }
        else if(p1final > p2final){
            winner = PLAYER2;
            console.log(winner)
        }
        else if(p1final === p2final){
            let winner = PLAYER3;
            console.log(winner);
        }
    }
    clearField(winner);
}

function clearField(winPlayer){
    let p1cardz = document.querySelector(PLAYER1["div"]).querySelectorAll("img");
    let p2cardz = document.querySelector(PLAYER2["div"]).querySelectorAll("img");

    gameData["player1"]["score"] = 0;
    gameData["player2"]["score"] = 0;


    if(winPlayer == PLAYER1){
        document.querySelector("#player1-score").textContent = "YOU WIN!";
        let wins = gameData["player1wins"] += 1
        document.querySelector("#p1wins").textContent = wins;
       }
    else if(winPlayer == PLAYER2){
        document.querySelector("#player2-score").textContent = "YOU WIN!";
        let wins = gameData["player2wins"] += 1
        document.querySelector("#p2wins").textContent = wins;
    }
    else{
        document.querySelector("#player1-score").textContent = "DRAW";
        document.querySelector("#player2-score").textContent = "DRAW";
        let wins = gameData["draws"] += 1
        document.querySelector("#draws").textContent = wins;
     
    }

    for(i=0;i<p1cardz.length; i++){
        p1cardz[i].remove();
    }
    for(i=0;i<p2cardz.length; i++){
        p2cardz[i].remove();
    }
}


function declareWinner(winplayer){
    if(winplayer == PLAYER1){
        let winMessage = document.createTextNode("YOU WIN!");
        let playerbox = document.querySelector("#player1-box");
        playerbox.append(winMessage);  
    }
}