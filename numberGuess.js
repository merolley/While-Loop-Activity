/* references:
https://www.enablegeek.com/tutorial/implementing-readline-for-user-input-in-node-js/
https://www.programiz.com/javascript/examples/guess-number
https://developer.mozilla.org/en-US/docs/Web/JavaScript
*/
//implementing readline for user's input in node js
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
//guess the number game
function guessNumber() {
    const random = Math.floor(Math.random() * 10) + 1; //create the randomized number   
// this function will ask for the user's guess
    const askQuestion = () => {
        readline.question("Guess a number between 1 and 10: ", (number) => {
            number = parseInt(number);
            if (number === random) {
                console.log("Correct ka jan!");
                readline.close(); //closing the readline to stop the game  
            } else if (random<number){
                console.log("Too high!");
                askQuestion();
            }else {
                console.log("Too low -.-");
                askQuestion(); // ask the user until he/she correctly guess
            }
        });
    };

    askQuestion(); 
}

guessNumber(); //calling the function again to start the game
