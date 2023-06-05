//Variables:
let message = document.querySelector(".message");
let maxNumber=20;
let guesses=[];
let score=document.querySelector(".score");
let totalscore=20;
let highscore = document.querySelector(".highscore");
let randomNumber = Math.floor(Math.random() * maxNumber) + 1;

//This function will check the input number to decide whether it matches the random number the game generates or it does not.
function checkNumber(){
    let guess= parseInt(document.querySelector(".guess").value);
    if (totalscore>1){ //check the total score first
        if (isNaN(guess) || guess < 1 || guess > 20){  //if the number you input is out of range (1 to 20), the game will not take away any point and it will tell you to choose a valid number.
            message.innerHTML="Please input a valid number between 1 and 20";
        }
        else if (guess == randomNumber){
            message.innerHTML="Correct Number! Congratulations!";
            document.body.style.backgroundColor="green";
            document.querySelector(".guess").disabled = true; //when you win the game, you cannot press any button unless you restart it, which means you have to press "Again" to start a new game.
            document.querySelector(".check").disabled = true;
            }
        else {
            if (guesses.includes(guess)){ //If you input a number you have already used, the game still takes away a point but it will tell you to choose another number.
                message.innerHTML="You have guessed this number! Try another one";
                totalscore--;
                score.innerHTML=totalscore;
    
            }
            else if (guess > randomNumber){
                message.innerHTML="Too high! Try again...";
                totalscore--; //For every wrong guess, it takes away a point
                score.innerHTML=totalscore;
            }
            else {
                message.innerHTML="Too low! Try again...";
                totalscore--;
                score.innerHTML=totalscore;
            }
            guesses.push(guess);
        }
    }
    else {
        if (guess == randomNumber){ 
            message.innerHTML="Correct Number! Congratulations!";
            document.body.style.backgroundColor="green";
            document.querySelector(".guess").disabled = true;
            document.querySelector(".check").disabled = true;
        }
        else{
            totalscore--; 
            score.innerHTML=totalscore;
            message.innerHTML="You lost the game!";
            document.body.style.backgroundColor="red";
            document.querySelector(".guess").disabled = true;
            document.querySelector(".check").disabled = true;
        }
    }
    
}

//This function updates the highscore when a new game starts if the highscore you just get from the previous game is higher than the highscore you ever reach.
function updateHighscore() {
    if (totalscore > parseInt(highscore.innerHTML)){
        highscore.innerHTML=totalscore;
    }
}

//This function will allow all the buttons to work again when a new game starts. You have to press "Again" to let this happen.
//The game goes back to its default display.
function resetGame() {
    updateHighscore();
    message.innerHTML="Start guessing...";
    document.querySelector(".guess").innerHTML="";
    totalscore=20;
    score.innerHTML=20;
    randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    guesses=[];
    document.body.style.backgroundColor="#222";
    document.querySelector(".guess").value="";
    document.querySelector(".guess").disabled = false;
    document.querySelector(".check").disabled = false;
}