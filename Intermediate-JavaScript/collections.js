var guestList = ["Ghazy", "Imran", "Jack", "Jaz", "Jason"];

var guestName = prompt("What is your name?");

 if (guestList.includes(guestName)) {
    alert("Welcome!");
 } else {
    alert("Sorry, maybe next time.");
 }