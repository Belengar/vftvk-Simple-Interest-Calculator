function compute()
{
    // get the principal input node
    var principal = document.getElementById("principal");
    // if it is zero or negative display a message and 
    // point the user back to the input box
    if (principal.value <= 0){
        alert("Enter a positive number")
        principal.focus();
        return;
    }
    //g et the interest rate
    var rate = document.getElementById("rate").value;
    // get the number of Years
    var years = document.getElementById("years").value;
    // calculate the interest
    var interest = principal.value * years * rate / 100;
    // get today's date from the system
    var today = new Date();
    // get only the year and add the number of years from the input
    var futureYear = today.getFullYear()+ parseInt(years);

    // get the node of the span where we are writing the whole message for the user
    var result = document.getElementById("result");
    // set the innerHTML incorporating the variables and HTML tags
    result.innerHTML = "If you deposit <mark>" + principal.value + "</mark>,<br>" +
                    "at an interest rate of <mark>" + rate + "%</mark>.<br>" +
                    "You will receive an amount of <mark>" + interest + "</mark>,<br>" +
                    "in the year <mark>" + futureYear + "</mark>"

}

function getRangeValue(){
    // get the rate value
    var rate = document.getElementById("rate").value;
    // get the span node
    var rateSpan = document.getElementById("rateSpan");
    // write the rate into the span html 
    rateSpan.innerHTML = rate;
}