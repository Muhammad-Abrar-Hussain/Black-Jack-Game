let cards  = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = " "
let sumEle = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let cardEl = document.querySelector("#card-el")
let loseEle = document.querySelector("#lose-el")

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    if (sum < 21){
        message = "Do you want to draw a new card?🙂"
    } else if(sum == 21){
        message = "Wohoo! You've got Blackjack!🥳"
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    messageEl.textContent = message
    sumEle.textContent = "Sum: " + sum 
    cardEl.textContent = "Cards: "
    for(i=0; i<cards.length; i++){
        cardEl.textContent += cards[i]+" , "
    }  
}

function newCard() {
    if (isAlive===true){
        let new_card  = getRandomCard()
    sum +=new_card
    cards.push(new_card)
    renderGame()
    } else {
        window.alert("You lose the game, Start NEW GAME")

    }
    
}

function getRandomCard(){
   let randomNumer = Math.floor(Math.random()*14)
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}