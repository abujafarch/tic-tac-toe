function playNow(){
    removeElementById('home')
    showElementById('play-ground')
}

let i = 1;
function boxClick(boxId){
    const imageLists = document.getElementById(boxId)
    const image = imageLists.children
    if(i % 2 === 1){
        image[0].classList.remove('hidden')
        image[0].classList.add('gotCircle')
    }
    else{
        image[1].classList.remove('hidden')
        image[1].classList.add('gotCross')
    }
    matchCircleClasses()
    matchCrossClasses()
    console.log(i)
    i++
    imageLists.removeAttribute('onclick')
    if(i === 10){
        gameOver()
        i = 1;
        document.getElementById('winer').innerText = "WOW bone fight"
    }
}


function gameOver(){
    setHiddenToAll()
    removeElementById('play-ground') 
    showElementById('result')
    i = 0;
}

function playAgain(){
    resetOnclick()
    resetGotCircleNCross()
    showElementById('play-ground')
    removeElementById('result')
}