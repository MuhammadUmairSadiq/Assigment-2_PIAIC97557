var TrafficSignal = prompt("Enter the colour");

if (TrafficSignal === "red") {
    alert("Must Stop");
} 
else if  (TrafficSignal === "yellow") {
    alert("Ready to Move");
}
else if (TrafficSignal === "green") {
    alert("Move now");
} 
else {
    alert("Wrong Colour");
}