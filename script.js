function play(rValue, pValue) {
    document.querySelector('.left img').src="/" + pValue + "-hand.svg"
    searchRock()
    valueCompare(pValue, rValue)
    scoreNumbers()
}

const wins = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock',
}

function valueCompare (igor, valera) {

    if (igor === valera){
        console.log('Draw')
        return 0
    } 
    
    const bWins = wins[valera]
    

    if (bWins === igor){
        console.log('Lose')
        computerScore += 1
        return -1
    } 
    
        humanScore += 1
        return 1
} 

function searchRock() {
    let rocks = document.querySelectorAll('.choice-icons')
    
    
    for (let i = 0; i < rocks.length; i++) {
        let rock = rocks[i]
        if (rock.getAttribute('src') === '/rock-hand.svg' || rock.getAttribute('src') === '/rock-hand-reverse.svg') {
           rock.classList.add('rockIcon')
        } else {
            rock.classList.remove('rockIcon')
        }
    }
}

function scoreNumbers() {
    let humanPic = document.querySelector('.leftNumberIcon')
    humanPic.src = pictures[humanScore]

    let computerPic = document.querySelector('.rightNumberIcon')
    computerPic.src = pictures[computerScore]
     
    if (humanScore === 5 || computerScore === 5){
        humanScore = 0
        computerScore = 0
    }
}

const pictures = {0:'/number0.svg', 1:'/number1.svg', 2:'/number2.svg', 3:'/number3.svg', 4:'/number4.svg', 5:'/number5.svg',}

function getPictureByScore(score){  
    return pictures[score];
}

let humanScore = 0;
let computerScore = 0;   


function enemyRandom() {
    let array = ['rock', 'scissors', 'paper']
    let rand = Math.floor(Math.random()*array.length)
    let rValue = array[rand]
    console.log(rValue)
    
    if (rValue === 'rock') {
        document.querySelector('.right img').src="/rock-hand-reverse.svg"
    } if (rValue === 'scissors') {
        document.querySelector('.right img').src="/scissors-hand-reverse.svg"
    } if (rValue === 'paper') {
        document.querySelector('.right img').src="/paper-hand-reverse.svg"
    }
    
    return rValue;
} 