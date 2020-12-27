var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
} // alert box displayed

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}  // alert box did not displayed

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
} // alert box displayed after condition 2 
if (c === 13) {
    alert("condition 2 is true");
} // alert box displayed
if (++c < 14) {
    alert("condition 3 is true");
} // alert box did not displayed
if (c === 14) {
    alert("condition 1 is true");
} // alert box did not displayed

var MaterialCost = 5000; 
var LaborCost = 2000; 
var TotalCost = MaterialCost + LaborCost; 
if (TotalCost === LaborCost + MaterialCost){ 
alert("The Cost Equals"); 
}  // alert box displayed

if (true){ 
    alert("True"); 
    } 
    if (false){ 
    alert("False"); 
    } // alert box displayed and shows true as a output

if("car" < "cat"){ 
        alert("car is smaller than cat"); 
    } //alert box displayed
        
    


