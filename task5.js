var SecretNumber = 7;
var InputNumber = prompt("Enter a number(ranging 1 to 10)");
if (InputNumber == SecretNumber) {
    alert("Bingo! Correct Answer");
} 
else if (InputNumber == SecretNumber + 1 || InputNumber == SecretNumber - 1) {
    alert("Close enough to correcct answer");
}
else {
    alert("Wrong Answer");
}