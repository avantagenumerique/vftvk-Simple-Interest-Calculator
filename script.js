

function compute()
{

    if (validatemin()) { /* first verify if the principal value is valid */
        /* set variables */
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);

        /* assign value to the result tag */
        document.getElementById("result").innerHTML = " \
            If you deposit <mark>" + principal + "</mark>, \
            at an interest rate of <mark>" + rate + "%</mark>. \
            You will receive an amount of <mark>" + interest + "</mark>, \
            in the year <mark>" + year + "</mark>"

    }
}

function updateRate() /* get the value from the slider and display it in the span tag */
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
    

function validatemin() /* make sure the user input a vlue greater then zerp*/
{
    var principal = document.getElementById("principal").value;
    if ( principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return 0;
    }        
    else
        return 1
}
        