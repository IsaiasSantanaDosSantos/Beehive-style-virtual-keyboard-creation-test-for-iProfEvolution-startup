//Global variable





let letterA = document.getElementById("key-a")
letterA.addEventListener("click", clickA)
//Click at the key A
function clickA() {
    //Show group of letters
    let showABox = document.getElementById("letter-a")
    showABox.style.display="block"
    //Position keys
    let buttonR = document.getElementById("key-r")
    buttonR.style.top= "32px";
    buttonR.style.left="202px"

    let buttonU = document.getElementById('key-u')
    buttonU.style.top="65px"
    buttonU.style.left="140px"

    let buttonI = document.getElementById("key-i")
    buttonI.style.top="65px"
    buttonI.style.left="265px"

    let buttonA = document.getElementById("key-a")
    buttonA.style.top="97px"
    buttonA.style.left="203px"

    let buttonF = document.getElementById("key-f")
    buttonF.style.top="130px"
    buttonF.style.left="140px"

    let buttonG = document.getElementById("key-g")
    buttonG.style.top="130px"
    buttonG.style.left="265px"

    //Hide keys
    let mainKeyboard = document.getElementById("boxTwo")
    mainKeyboard.style.display="none"
}

