const add = function(num1, num2){
    return num1 + num2;
}

const subtract = function(num1, num2){
    return num1 - num2;
}

const multiply = function(num1, num2){
    return num1 * num2;
}

const divide = function(num1, num2){
     return num1 / num2;
}

const operate = function(operator, num1, num2){
    if(operator === '+'){
        return add(num1, num2);
    }
    else if(operator === '-'){
        return subtract(num1, num2);
    }
    else if(operator === '*'){
        return multiply(num1, num2);
    }
    else if(operator === '/'){
        return divide(num1, num2);
    }
}

// Add number buttons to div with numbers class
const numbers = document.querySelector('.numbers');

for(let i = 1; i < 10; i++){
    const button = document.createElement('button');
    button.textContent = i;
    button.value = i;
    numbers.append(button);
}

// When a button is clicked, put it on the display
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
console.log('display.textContent =' + display.textContent);
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
            console.log(display.textContent == 0)
            let displayStuff = display.textContent.split(" ");
            let displayLast = displayStuff[displayStuff.length - 1];
            let eTarget = e.target.value;
            if(display.textContent == 0){
                display.textContent = eTarget;
                console.log(display.textContent);
            }
            else{
                if(eTarget === '+' || eTarget === '-' || eTarget === '*' || eTarget === '/' || eTarget === '='){
                    if(displayLast === '+' || displayLast === '-' || displayLast === '*' || displayLast === '/' || displayLast === '='){
                        displayStuff.pop();
                        displayStuff.push(eTarget);
                        display.textContent = displayStuff.join(" ");
                    }
                    else{
                        display.textContent += ' ' + eTarget;
                    }
                    console.log(displayStuff.splice(0, 3));
                    console.log(displayStuff);
                }
                else if(eTarget === 'clear'){
                    display.textContent = 0;
                }
                else{
                    if(Number.isInteger(parseInt(displayLast))){
                        display.textContent += eTarget;
                    }
                    else{
                        display.textContent += ' ' + eTarget;
                    }
                }
            }
        })
    }
)

