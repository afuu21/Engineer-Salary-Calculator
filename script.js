function compute() {
    //Get the values and calculate 
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    if(rate==1) {
       rate=10;
    } else if(rate==2) {
       rate=25;
    } else {
       rate=50;
    }
    var years = parseInt(document.getElementById("years").value);
    var interest = principal + principal * years * rate / 100;
    var yearInTheFuture = new Date().getFullYear() + years;
    //Create the Interest text
    document.getElementById("result").innerHTML = 
        "You will receive be recieveing salary of <mark>" + interest + "</mark>,<br/> " +
        "in the year <mark>" + yearInTheFuture + "</mark>";

}

//update the rate value
function getSliderValue() {
    document.getElementById("rateSpan").innerHTML = document.getElementById("rate").value;
}

//Check for positive values
function validateAmount() {
    var principal = document.getElementById("principal").value;
    var biggerThanZero = parseInt(principal) > 0;
    if (!biggerThanZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

}