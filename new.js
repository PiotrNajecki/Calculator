'use strict'


var screen = document.querySelector('#screen')
var ceKey = document.querySelector('#buttonCE')
var operatorKeys = document.querySelectorAll('.buttonOperator')
var numberKeys = document.querySelectorAll('.buttonNumber')
var resultKey = document.querySelector('#buttonResult') 

 const eraseFunction = () => {  
    ceKey.onclick = () => {
    screen.textContent = "" }
}


const resultFunction = () => {
    resultKey.onclick = () => {
        let lastCharOfScreen = screen.textContent[screen.textContent.length-1]
        if (lastCharOfScreen!='+' && lastCharOfScreen!='-' && lastCharOfScreen!='/' && lastCharOfScreen!='*' && lastCharOfScreen!='.' ) {
            screen.textContent = eval(screen.textContent)                      
        }
        else {
            screen.textContent = eval(screen.substring(0, screen.textContent.length))
        }
    }
}


const numberFunction = () => {
    for (let i=0; i<numberKeys.length; i++) {
        let buttonNumberValue = numberKeys[i]
        numberKeys[i].onclick = (buttonNumberValue) => {
            if (screen.textContent.length==1 && screen.textContent==0) {
                return (screen.textContent = buttonNumberValue.target.textContent)
            }
            else {
                return (screen.textContent += buttonNumberValue.target.textContent)
            }
        }
    }
}


const operatorFunction = () => {
    
    for (let i=0; i<operatorKeys.length; i++) {
        let buttonOperatorValue = operatorKeys[i]
        operatorKeys[i].onclick = (buttonOperatorValue) => {
            let lastCharOfScreen = screen.textContent.substring((screen.textContent.length-1),screen.textContent.length)
            
            // Warunek 1 -> dodanie minusa na początku wyrażenia, gdy na ekranie jest "pusto"
            if (screen.textContent.length == 0 && buttonOperatorValue.target.textContent=="-") {
                return (screen.textContent=buttonOperatorValue.target.textContent)
            }

            if (screen.textContent.length == 1 && screen.textContent == 0 && buttonOperatorValue.target.textContent=="-") {
                return (screen.textContent=buttonOperatorValue.target.textContent)
            }

            if (screen.textContent.length == 1 && screen.textContent == "-" && buttonOperatorValue.target.textContent!=="-") {
                return (screen.textContent = "")
                
            }


            if (screen.textContent.length>0) {
            // Warunek 2 -> dodanie operatora tylko i wyłaćznie wtedy gdy ostatni znak nie jest operatorem
                if (lastCharOfScreen!="+" && lastCharOfScreen!="-" && lastCharOfScreen!="*" && lastCharOfScreen!="/") {
                return (screen.textContent += buttonOperatorValue.target.textContent)
                } else {
                    return (screen.textcontent = screen.textContent.substring(0, screen.textcontent.length-2)+buttonOperatorValue.target.textcontent)
                }    
        }
    }
    }
}






