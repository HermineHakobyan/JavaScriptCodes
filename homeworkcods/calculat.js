

//Calculator


while(4<7){
    let firstNumber = +prompt("first Number");
if(!firstNumber){
    firstNumber = +prompt("You should Enter only number");
}

let operator = prompt("Enter operator(+, -, *, /, %, **)");
if( operator !="%" ||  operator != "+" ||  operator != "**" || operator != "-" || operator != "*" || operator != "/" ){
    operator = prompt("Please Enter only operators");
}
let secondNumber = +prompt("second Number");
if(!secondNumber){
    secondNumber = +prompt("You should Enter only number");
}
let result;
switch(operator){
    case "+":
        result = firstNumber + secondNumber;
     alert(`${firstNumber} + ${secondNumber} = ${result}`);
            break;
        
    case "-":
        result = firstNumber - secondNumber;
     alert(`${firstNumber} - ${secondNumber} = ${result}`);
        break;
    case "*":
        result = firstNumber * secondNumber;
     alert(`${firstNumber} * ${secondNumber} = ${result}`);
        break;
    case "/":
        result = firstNumber / secondNumber;
     alert(`${firstNumber} / ${secondNumber} = ${result}`);
        break;
        case "%":
         result = firstNumber % secondNumber;
    alert(`${firstNumber} % ${secondNumber} = ${result}`);
         break;
         case "**":
         result = firstNumber ** secondNumber;
    alert(`${firstNumber} ** ${secondNumber} = ${result}`);
         break;
    default:
        alert('Invalid enters');
        break;
}

}