var operator = prompt("Enter operator ( either +, -, * , / or %): ");

var number1 = parseFloat(prompt("Enter first number: "));
var number2 = parseFloat(prompt("Enter second number: "));

if (operator == "+") {
    alert(number1 + number2);
}
else if (operator == "-") {
    alert(number1 - number2);
}
else if (operator == "*") {
    alert(number1 * number2);
}
else if (operator == "/") {
    alert(number1 / number2);
}
else {
    alert(number1 % number2);
}
