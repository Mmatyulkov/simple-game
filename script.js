function play(pValue) {
    document.querySelector('.left img').src="./" + pValue + "-hand.svg"
    scoreNumbers(result)
    const result = valueCompare(pValue, rValue);
    const rValue = enemyRandom()
    searchRock()
}

const wins = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock',
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
function valueCompare (pValue, rValue) {

    if (pValue === rValue){
        console.log('Draw')
        return 0
    } 
    const bWins = wins[rValue]
    if (bWins === pValue){
        console.log('Lose')
        computerScore += 1
        return -1
    } 
        humanScore += 1
        return 1
} 

function scoreNumbers(result) {
    let humanPic = document.querySelector('.leftNumberIcon')
    humanPic.src = pictures[humanScore]

    let computerPic = document.querySelector('.rightNumberIcon')
    computerPic.src = pictures[computerScore]
     
    if (humanScore === 5 || computerScore === 5){
        humanScore = 0
        computerScore = 0
    }
}

const pictures = {0:'./number0.svg', 1:'./number1.svg', 2:'./number2.svg', 3:'./number3.svg', 4:'./number4.svg', 5:'./number5.svg',}
let humanScore = 0;
let computerScore = 0; 

function getPictureByScore(score){  
    return pictures[score];
}  

//////////////////////////////////////////////////////////////////////////////////////////////////////

function enemyRandom() {
    let array = ['rock', 'scissors', 'paper']
    let rand = Math.floor(Math.random()*array.length)
    let rValue = array[rand]
    console.log(rValue)
    document.querySelector('.right img').src="./" + rValue + "-hand-reverse.svg"
    return rValue;
} 

function searchRock() {
    let rocks = document.querySelectorAll('.choice-icons')
    
    
    for (let i = 0; i < rocks.length; i++) {
        let rock = rocks[i]
        if (rock.getAttribute('src') === './rock-hand.svg' || rock.getAttribute('src') === './rock-hand-reverse.svg') {
           rock.classList.add('rockIcon')
        } else {
            rock.classList.remove('rockIcon')
        }
    }
}