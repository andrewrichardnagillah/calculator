let currentInput = document.querySelector('.currentInput')
let answerArea = document.querySelector('.answerArea')
let buttons = document.querySelectorAll('.button')
let erasebtn = document.querySelector('#erase')
let clearbtn = document.querySelector('#clear')
let evaluate = document.querySelector('#evaluate')
let realTimeScreenValue = []

clearbtn.addEventListener("click", () => {

    realTimeScreenValue = ['']
    answerArea.innerHTML = 0
    currentInput.className = 'currentInput'
    answerArea.className = 'answerArea'
    answerArea.getElementsByClassName.color = "rgb(150,150,0.87)"
})
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        //clicked btn is not erased btn
        if (!btn.id.match('erase')) {
            //display value on btn press
            realTimeScreenValue.push(btn.value)
            currentInput.innerHTML = realTimeScreenValue.join('')
            if (btn.classList.contains('num-btn')) {
                answerArea.innerHTML = eval(realTimeScreenValue.join(''))
            }
        }
        //erase btn clicked
        if (btn.id.match('erase')) {
            realTimeScreenValue.pop()
            currentInput.innerHTML = realTimeScreenValue.join('')
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''))
        }
        // if evaluate btn clicked
        if (btn.id.match('evaluate')) {
            currentInput.className = 'answerArea'
            answerArea.className = 'currentInput'
            answerArea.getElementsByClassName.color = 'white'

        }
        //prevent unidentified error
        if (typeof eval(realTimeScreenValue.join('')) == 'undefined') {
            answerArea.innerHTML = 0
        }
    })
})