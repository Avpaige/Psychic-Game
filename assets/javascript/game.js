var wins = 0;
var losses = 0;
var numGuess = 9;
var guesses = [];
var nonLet= ["1","2","3","4","5","6","7","8","9","0","-", "=", "`","/",".","[","]", ";", ","];
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
    compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("reset was run" +compGuess);

} 

    console.log ("comp guess is " + compGuess);

document.onkeypress= function(event){    

var playGuess = String.fromCharCode(event.keyCode); 

console.log(playGuess);

//if guess in array  greater than 0 nothing happens or pushed that number in the array

if (compGuess===playGuess){
    wins++;
    console.log(wins);
    document.getElementById("wins").textContent = ("Wins: " + wins);
    alert ("Congrats you beat Miss Cleo!");
    reset();

    //add function to rerandomize comp guess and reset array to 0
}else if (numGuess===0){
    losses++;
    alert ("You couldn't beat Miss Cleo!");
    document.getElementById("losses").textContent = ("Losses: " + losses);
    reset();
    
}else if (guesses.includes(playGuess)){
alert ("You've already guessed this letter! Try Again!");

}else if (nonLet.includes(playGuess)){
    alert ("That's not a letter! You can't fool Miss Cleo!");
    
    
} else {
    numGuess--;
    guesses.push(playGuess);
    document.getElementById("numGuess").textContent = ("Guesses Left:  " + numGuess);
    document.getElementById("guessMade").textContent = ("Your Guesses so far: " + guesses);
    

}

};
