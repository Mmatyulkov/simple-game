function stone(rValue){
    console.log('Stone')

    if (rValue === 'stone'){
        console.log('Draw') 
    } else if (rValue === 'scissors'){
        console.log('Win')
    } else if (rValue === 'paper'){
        console.log('Lose')

    } 

    rmIcon()
}

function scissors(rValue) {
    console.log('Scissors')

    if (rValue === 'stone'){
        console.log('Lose') 
    } else if (rValue === 'scissors'){
        console.log('Draw')
    } else if (rValue === 'paper'){
        console.log('Win')
    } 
}

function paper(rValue) {

    if (rValue === 'stone'){
        console.log('Win') 
    } else if (rValue === 'scissors'){
        console.log('Lose')
    } else if (rValue === 'paper'){
        console.log('Draw')
    } 


}

function enemyRandom() {
    let array = ['stone', 'scissors', 'paper']
    let rand = Math.floor(Math.random()*array.length)
    let rValue = array[rand]
    console.log(rValue)
    return rValue;

}

function rmIcon() {
    let fChild = document.getElementsById('left')
    fChild.removeChild(fChild.firstChild)

    // let img = document.createElement('img');
    // img.src = "/paper-hand-reverse.svg"
    // img.className = "choice-icons";
    // document.getElementById('left').appendChild(img);

    let sChild = document.getElementById('right')
    sChild.removeChild(sChild.firstChild)
}