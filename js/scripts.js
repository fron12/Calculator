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