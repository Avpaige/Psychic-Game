var wins = 0;
var losses = 0;
var numGuess = 9;
var guesses = [];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var ranLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
var compGuess= ranLetter;
var keyCodes = {
    65: "a", 
    66: "b", 
    67: "c", 
    68: "d", 
    69: "e", 
    70: "f", 
    71: "g", 
    72: "h", 
    73: "i", 
    74: "j", 
    75: "k", 
    76: "l", 
    77: "m", 
    78: "n", 
    79: "o", 
    80: "p", 
    81: "q", 
    82: "r", 
    83: "s", 
    84: "t", 
    85: "u", 
    86: "v", 
    87: "w", 
    88: "x", 
    89: "y", 
    90: "z" 
  }
  
var reset = function() {
    numGuess = 9;
    guesses = [];

}

    console.log ("comp guess is " + compGuess);


document.onkeypress= function(event){    
var playGuess = String.fromCharCode(event.keyCode); 

guesses.push(playGuess);

document.getElementById("guessMade").textContent = ("You Guesses so far: " + guesses);

if (compGuess===playGuess){
    wins++;
    reset();
} else if (compGuess!=playGuess){
    numGuess--;
    }if (numGuess===0){
    losses++;
    document.getElementById("losses").textContent = ("Losses: " + losses);
    reset();
    


    console.log (compGuess);


    }

document.onkeypress=function(event){
    var playGuess = String.fromCharCode(event.keyCode); 


document.getElementById("wins").textContent = ("Wins: "+ wins);
document.getElementById("losses").textContent = ("Losses: "+ losses);
document.getElementById("numGuess").textContent = ("Guesses Left: "+ numGuess);
}

}

