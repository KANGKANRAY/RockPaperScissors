const generateBotChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const index = Math.floor(Math.random() * 3);
    return choices[index];
}

const drawGame = () => {
    console.log("It's a draw, play again!");
    msg.innerText = "It's a draw, play again!";
    msg.style.backgroundColor = "#081b31";
}

const showResult = (userWin,userChoice,botChoice) => {
      //showResult
      if (userWin === true) {
        //local variable 'output', it's scope is within {}
        const output = `Congratulations You Won !!!Your ${userChoice} beats bot's ${botChoice}`;
        userScore += 1;
        console.log(output + ":", userScore);
        userScoreQuery.innerText = userScore;
        msg.innerText = output;
        msg.style.backgroundColor = "green";     
    } 
    else {
        //this 'output' is also a local variable, it's scope is within {}
        const output = `Opps you lost!!!Bot's ${botChoice} beats your ${userChoice}`;
        botScore += 1;
        console.log(output + ":", botScore);
        botScoreQuery.innerText = botScore;
        msg.innerText = output;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    botChoice = generateBotChoice();
    console.log("user choice ",userChoice);
    console.log("bot choice ",botChoice);
    if (userChoice === botChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === 'rock'){
            //paper, scissors
            userWin = botChoice === 'paper' ? false : true;
            console.log(userWin);
            showResult(userWin,userChoice,botChoice);
        }
        else if (userChoice === 'paper'){
            //rock, scissors
            userWin = botChoice === 'scissors' ? false : true;
            console.log(userWin);
            showResult(userWin,userChoice,botChoice);
        }
        else{//scissors
            //rock, paper
            userWin = botChoice === 'rock' ? false : true;
            console.log(userWin);
            showResult(userWin,userChoice,botChoice);
        }
    }
}
//********************Main Function***********************//

let userScore = 0;
let botScore = 0;
//select html query
const userChoiceAll = document.querySelectorAll(".choice");
const userScoreQuery = document.querySelector("#user-score");
const botScoreQuery = document.querySelector("#bot-score");
const msg = document.querySelector("#msg");
//console.log(userChoice);
userChoiceAll.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});
