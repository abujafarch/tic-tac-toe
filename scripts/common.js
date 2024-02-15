function removeElementById(elementId){
    const home = document.getElementById(elementId)
    home.classList.add('hidden')
}
function showElementById(elementId){
    const home = document.getElementById(elementId)
    home.classList.remove('hidden');
}

function box1(){
    boxClick('box1')
}
function box2(){
    boxClick('box2')
}
function box3(){
    boxClick('box3')
}
function box4(){
    boxClick('box4')
}
function box5(){
    boxClick('box5')
}
function box6(){
    boxClick('box6')
}
function box7(){
    boxClick('box7')
}
function box8(){
    boxClick('box8')
}
function box9(){
    boxClick('box9')
}


function matchCircleClasses(){
    const circle1 = document.getElementById('circle-1')
    const circle2 = document.getElementById('circle-2')
    const circle3 = document.getElementById('circle-3')
    const circle4 = document.getElementById('circle-4')
    const circle5 = document.getElementById('circle-5')
    const circle6 = document.getElementById('circle-6')
    const circle7 = document.getElementById('circle-7')
    const circle8 = document.getElementById('circle-8')
    const circle9 = document.getElementById('circle-9')

    for(const class1 of circle1.classList){
        if(class1 === 'gotCircle'){
            for(const class2 of circle2.classList){
                if(class2 === 'gotCircle'){
                    for(const class3 of circle3.classList){
                        if(class3 === 'gotCircle'){
                            gameOver()
                            document.getElementById('winer').innerText = "Blue Player Win(Circle)"
                        }
                    }
                }
            }
        }
    }
    for(const class4 of circle4.classList){
        if(class4 === 'gotCircle'){
            for(const class5 of circle5.classList){
                if(class5 === 'gotCircle'){
                    for(const class6 of circle6.classList){
                        if(class6 === 'gotCircle'){
                            gameOver()
                            document.getElementById('winer').innerText = "Blue Player Win(Circle)"
                        }
                    }
                }
            }
        }
    }
    for(const class7 of circle7.classList){
        if(class7 === 'gotCircle'){
            for(const class8 of circle8.classList){
                if(class8 === 'gotCircle'){
                    for(const class9 of circle9.classList){
                        if(class9 === 'gotCircle'){
                            gameOver()
                            document.getElementById('winer').innerText = "Blue Player Win(Circle)"
                        }
                    }
                }
            }
        }
    }
    for(const class10 of circle1.classList){
        if(class10 === 'gotCircle'){
            for(const class11 of circle4.classList){
                if(class11 === 'gotCircle'){
                    for(const class12 of circle7.classList){
                        if(class12 === 'gotCircle'){
                            gameOver()
                            document.getElementById('winer').innerText = "Blue Player Win(Circle)"
                        }
                    }
                }
            }
        }
    }
    for(const class13 of circle2.classList){
        if(class13 === 'gotCircle'){
            for(const class14 of circle5.classList){
                if(class14 === 'gotCircle'){
                    for(const class15 of circle8.classList){
                        if(class15 === 'gotCircle'){
                            gameOver()
                            document.getElementById('winer').innerText = "Blue Player Win(Circle)"
                        }
                    }
                }
            }
        }
    }
    for(const class16 of circle3.classList){
        if(class16 === 'gotCircle'){
            for(const class17 of circle6.classList){
                if(class17 === 'gotCircle'){
                    for(const class18 of circle9.classList){
                        if(class18 === 'gotCircle'){
                            gameOver()
                            document.getElementById('winer').innerText = "Blue Player Win(Circle)"
                        }
                    }
                }
            }
        }
    }
    for(const class19 of circle1.classList){
        if(class19 === 'gotCircle'){
            for(const class20 of circle5.classList){
                if(class20 === 'gotCircle'){
                    for(const class21 of circle9.classList){
                        if(class21 === 'gotCircle'){
                            gameOver()
                            document.getElementById('winer').innerText = "Blue Player Win(Circle)"
                        }
                    }
                }
            }
        }
    }
    for(const class22 of circle3.classList){
        if(class22 === 'gotCircle'){
            for(const class23 of circle5.classList){
                if(class23 === 'gotCircle'){
                    for(const class24 of circle7.classList){
                        if(class24 === 'gotCircle'){
                            gameOver()
                            document.getElementById('winer').innerText = "Blue Player Win(Circle)"
                        }
                    }
                }
            }
        }
    }
    
}
function matchCrossClasses(){
    const cross1 = document.getElementById('cross-1')
    const cross2 = document.getElementById('cross-2')
    const cross3 = document.getElementById('cross-3')
    const cross4 = document.getElementById('cross-4')
    const cross5 = document.getElementById('cross-5')
    const cross6 = document.getElementById('cross-6')
    const cross7 = document.getElementById('cross-7')
    const cross8 = document.getElementById('cross-8')
    const cross9 = document.getElementById('cross-9')

    for(const class1 of cross1.classList){
        if(class1 === 'gotCross'){
            for(const class2 of cross2.classList){
                if(class2 === 'gotCross'){
                    for(const class3 of cross3.classList){
                        if(class3 === 'gotCross'){
                            gameOver()
                            document.getElementById('winer').innerText = "Green Player Win(Cross)"
                        }
                    }
                }
            }
        }
    }
    for(const class4 of cross4.classList){
        if(class4 === 'gotCross'){
            for(const class5 of cross5.classList){
                if(class5 === 'gotCross'){
                    for(const class6 of cross6.classList){
                        if(class6 === 'gotCross'){
                            gameOver()
                            document.getElementById('winer').innerText = "Green Player Win(Cross)"
                        }
                    }
                }
            }
        }
    }
    for(const class7 of cross7.classList){
        if(class7 === 'gotCross'){
            for(const class8 of cross8.classList){
                if(class8 === 'gotCross'){
                    for(const class9 of cross9.classList){
                        if(class9 === 'gotCross'){
                            gameOver()
                            document.getElementById('winer').innerText = "Green Player Win(Cross)"
                        }
                    }
                }
            }
        }
    }
    for(const class10 of cross1.classList){
        if(class10 === 'gotCross'){
            for(const class11 of cross4.classList){
                if(class11 === 'gotCross'){
                    for(const class12 of cross7.classList){
                        if(class12 === 'gotCross'){
                            gameOver()
                            document.getElementById('winer').innerText = "Green Player Win(Cross)"
                        }
                    }
                }
            }
        }
    }
    for(const class13 of cross2.classList){
        if(class13 === 'gotCross'){
            for(const class14 of cross5.classList){
                if(class14 === 'gotCross'){
                    for(const class15 of cross8.classList){
                        if(class15 === 'gotCross'){
                            gameOver()
                            document.getElementById('winer').innerText = "Green Player Win(Cross)"
                        }
                    }
                }
            }
        }
    }
    for(const class16 of cross3.classList){
        if(class16 === 'gotCross'){
            for(const class17 of cross6.classList){
                if(class17 === 'gotCross'){
                    for(const class18 of cross9.classList){
                        if(class18 === 'gotCross'){
                            gameOver()
                            document.getElementById('winer').innerText = "Green Player Win(Cross)"
                        }
                    }
                }
            }
        }
    }
    for(const class19 of cross1.classList){
        if(class19 === 'gotCross'){
            for(const class20 of cross5.classList){
                if(class20 === 'gotCross'){
                    for(const class21 of cross9.classList){
                        if(class21 === 'gotCross'){
                            gameOver()
                            document.getElementById('winer').innerText = "Green Player Win(Cross)"
                        }
                    }
                }
            }
        }
    }
    for(const class22 of cross3.classList){
        if(class22 === 'gotCross'){
            for(const class23 of cross5.classList){
                if(class23 === 'gotCross'){
                    for(const class24 of cross7.classList){
                        if(class24 === 'gotCross'){
                            gameOver()
                            document.getElementById('winer').innerText = "Green Player Win(Cross)"
                        }
                    }
                }
            }
        }
    }
    
}


function resetOnclick(){
    document.getElementById('box1').setAttribute('onclick', 'box1()')
    document.getElementById('box2').setAttribute('onclick', 'box2()')
    document.getElementById('box3').setAttribute('onclick', 'box3()')
    document.getElementById('box4').setAttribute('onclick', 'box4()')
    document.getElementById('box5').setAttribute('onclick', 'box5()')
    document.getElementById('box6').setAttribute('onclick', 'box6()')
    document.getElementById('box7').setAttribute('onclick', 'box7()')
    document.getElementById('box8').setAttribute('onclick', 'box8()')
    document.getElementById('box9').setAttribute('onclick', 'box9()')
    // console.log(document.getElementById('box1'))
}

function setHiddenToAll(){
    document.getElementById('circle-1').removeAttribute('class')
    document.getElementById('circle-2').removeAttribute('class')
    document.getElementById('circle-3').removeAttribute('class')
    document.getElementById('circle-4').removeAttribute('class')
    document.getElementById('circle-5').removeAttribute('class')
    document.getElementById('circle-6').removeAttribute('class')
    document.getElementById('circle-7').removeAttribute('class')
    document.getElementById('circle-8').removeAttribute('class')
    document.getElementById('circle-9').removeAttribute('class')
    document.getElementById('cross-1').removeAttribute('class')
    document.getElementById('cross-2').removeAttribute('class')
    document.getElementById('cross-3').removeAttribute('class')
    document.getElementById('cross-4').removeAttribute('class')
    document.getElementById('cross-5').removeAttribute('class')
    document.getElementById('cross-6').removeAttribute('class')
    document.getElementById('cross-7').removeAttribute('class')
    document.getElementById('cross-8').removeAttribute('class')
    document.getElementById('cross-9').removeAttribute('class')
}
function resetGotCircleNCross(){
    document.getElementById('circle-1').setAttribute('class', 'hidden w-[80%]')
    document.getElementById('circle-2').setAttribute('class', 'hidden w-[80%]')
    document.getElementById('circle-3').setAttribute('class', 'hidden w-[80%]')
    document.getElementById('circle-4').setAttribute('class', 'hidden w-[80%]')
    document.getElementById('circle-5').setAttribute('class', 'hidden w-[80%]')
    document.getElementById('circle-6').setAttribute('class', 'hidden w-[80%]')
    document.getElementById('circle-7').setAttribute('class', 'hidden w-[80%]')
    document.getElementById('circle-8').setAttribute('class', 'hidden w-[80%]')
    document.getElementById('circle-9').setAttribute('class', 'hidden w-[80%]')

    document.getElementById('cross-1').setAttribute('class', 'hidden h-[75%]')
    document.getElementById('cross-2').setAttribute('class', 'hidden h-[75%]')
    document.getElementById('cross-3').setAttribute('class', 'hidden h-[75%]')
    document.getElementById('cross-4').setAttribute('class', 'hidden h-[75%]')
    document.getElementById('cross-5').setAttribute('class', 'hidden h-[75%]')
    document.getElementById('cross-6').setAttribute('class', 'hidden h-[75%]')
    document.getElementById('cross-7').setAttribute('class', 'hidden h-[75%]')
    document.getElementById('cross-8').setAttribute('class', 'hidden h-[75%]')
    document.getElementById('cross-9').setAttribute('class', 'hidden h-[75%]')
}