var wonCont = 0;
var lostCont = 0;
for (var i = 1; i <= 5; i++) {
    var guessNumber = parseInt(prompt("Enter the number from 1 to 5: "));
    var randomNumber = Math.floor(Math.random() * 5) + 1;
    if (guessNumber == randomNumber) {
        document.write("You Press: " + guessNumber + "<br>" + "The random Number is: " + randomNumber + "<br>" + "You Have Won" + "<br>" + "<br>" + "<br>");
        wonCont++;
    }
    else {
        document.write("You Press: " + guessNumber + "<br>" + "The random Number is: " + randomNumber + "<br>" + "You Have Lost" + "<br>" + "<br>" + "<br>");
        lostCont++;
    }
}
document.write("You Have won: " + wonCont + " Times" + "<br>");
document.write("You Have lost: " + lostCont + " Times" + "<br>");