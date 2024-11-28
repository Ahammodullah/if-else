function checkNumber() {
    // Get the value from the input field
    var number = document.getElementById("numberInput").value;
    
    // Check if the number is even or odd using if-else
    if (number % 2 === 0) {
        document.getElementById("result").innerHTML = number + " is an Correct number.";
        document.getElementById("result").style.color = "blue";
    } else {
        document.getElementById("result").innerHTML = number + " is an incorrect number.";
        document.getElementById("result").style.color = "red"; 
    }
}