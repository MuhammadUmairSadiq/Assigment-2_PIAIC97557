var TotalMarks = 300;
console.log("Total Marks : " +TotalMarks);
var s1 = parseInt(prompt("Enter the marks in English"));
console.log("Marks in English : " +s1);
var s2 =  parseInt(prompt("Enter the marks in Urdu"));
console.log("Marks in Urdu : " +s2);
var s3 =  parseInt(prompt("Enter the marks in Maths"));
console.log("Marks in Maths : " +s3);

var s4 = s1 + s2 + s3;
console.log("Total Marks Obtained : " +s4);

var s5 = s4/TotalMarks*100
console.log("Percentage : " +s5+"%");

if (s5 >= 80) {
    console.log("Grade is A");
    console.log("Remarks : Weldone");
}
else if (s5 >= 70 && s5 < 79 ) {
    console.log("Grade is  B");
    console.log("Remarks : Good");
}
else if (s5 >= 60 && s5 < 69 ) {
    console.log("Grade is C");
    console.log("Remarks : Keep it up");
}
else if (s5 >= 50 && s5 < 59 ) {
    console.log("Grade is D");
    console.log("Remarks : Better but Need to Improve");
}
else if (s5 < 49 ) {
    console.log("Grade is F");
    console.log("Remarks : Fail");
}