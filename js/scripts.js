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

const operate = function(arr){
    let num1 = parseInt(arr[0]);
    let operator = arr[1];
    let num2 = parseInt(arr[2]);
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

for(let i = 0; i < 10; i++){
    const button = document.createElement('button');
    button.textContent = i;
    button.value = i;
    numbers.append(button);
}

// When a button is clicked, put it on the display
const buttons = document.querySelectorAll('button');
const displayTop = document.querySelector('.display-top');
const displayBottom = document.querySelector('.display-bottom');
console.log('display.textContent = ' + displayTop.textContent);
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
            // console.log(display.textContent == 0)
            let displayStuff = displayTop.textContent.split(" ");
            let displaySecondToLast = displayStuff[displayStuff.length - 2];
            let displayLast = displayStuff[displayStuff.length - 1];
            let eTarget = e.target.value;
            // If starting number for displayTop is zero, replace it with the target number clicked
            if(displayTop.textContent == 0){
                displayTop.textContent = eTarget;
            }
            // Check if symbol is clicked
            else{
                if(eTarget === '+' || 
                    eTarget === '-' || 
                    eTarget === '*' || 
                    eTarget === '/' || 
                    eTarget === '='){
                        // If previous button clicked is symbol replace with new symbol clicked
                        if(displayLast === '+' || 
                            displayLast === '-' || 
                            displayLast === '*' || 
                            displayLast === '/' || 
                            displayLast === '='){
                                    displayStuff.pop();
                                    displayStuff.push(eTarget);
                                    displayTop.textContent = displayStuff.join(" ");
                        }
                        // If previous entry is a number, add to displayTop
                        else{
                            displayTop.textContent += ' ' + eTarget;
                        }
                        // If the contents of displayTop have a length of at least 3 and a symbol
                        // is pressed, call the operate function on the first 3 elements of the 
                        // array and put the result in the beginning of the array. Display the result
                        // in display-bottom
                        console.log("displayStuff = " + displayStuff);
                        while(displayStuff.length >= 3){
                            let splicedStuff = displayStuff.splice(0, 3);
                            console.log(`splicedStuff = ${splicedStuff}`)
                            let result = operate(splicedStuff);
                            displayBottom.textContent = result;
                            displayStuff.unshift(result);
                            console.log(`displayStuff = ${displayStuff}`)
                            console.log("operate = " + result)
                        }
                }
                // If clear is clicked reset displayTop to zero
                else if(eTarget === 'clear'){
                    let buttons = document.querySelectorAll('button');
                    displayTop.textContent = 0;
                    displayBottom.textContent = 0;
                    buttons.forEach(button => {
                        button.disabled = false;
                    })
                }

                else{
                    // For consecutive numbers, add without a space
                    if(Number.isInteger(parseInt(displayLast))){
                        displayTop.textContent += eTarget;
                    }
                    // If it's a symbol, add a space before adding the symbol
                    else{
                        displayTop.textContent += ' ' + eTarget;
                    }
                }
                if(displaySecondToLast === '/' && displayLast === '0'){
                    let buttons = document.querySelectorAll('button');
                    displayBottom.textContent = 'Cannot divide by zero';
                    buttons.forEach(button => {
                        button.disabled = true;
                    })
                    let clearButton = document.querySelector('.clear');
                    clearButton.disabled = false;
                }
            }
        })
    }
)

