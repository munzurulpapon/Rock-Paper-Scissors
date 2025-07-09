let  userScore =0;
 let compScore=0;
 const msg =document.querySelector("#msg");


 const  choices =document.querySelectorAll(".choice");

 const userScorePara=document.querySelector("#user-score");
    const compScorePara=document.querySelector("#Comp-score");


const computerChoice = () => {

   const options = ["rock", "paper", "scissors"];
  const randIdx= Math.floor(Math.random()*options.length);
   return  options[randIdx];



}

const drawGame=()   => {


msg.innerText = "It's a draw!";
msg.style.backgroundColor = "#081b31";

}


const showWinner = (userwin,userChoise,compChoice) => {
if(userwin) {
 userScore++;
    userScorePara.innerText = userScore;
  msg.innerText = "You win! "+ userChoise + " beats " + compChoice;
  msg.style.backgroundColor = "green";

  
}
else
{
    compScore++;
    compScorePara.innerText = compScore;
    
    msg.innerText = "Computer wins! " + compChoice + " beats " + userChoise;
    msg.style.backgroundColor = "red";
}


}



const playGame = (userChoise) => {
 

 const compChoice= computerChoice();
   

    if(userChoise === compChoice) {
       
        drawGame();

    }

    else
    {
        let userwin= true;
        if(userChoise ==="rock")
        {
            userwin = compChoice === "paper" ? false : true;
        }

        else if(userChoise ==="paper")
        {
            userwin = compChoice === "scissors" ? false : true;
        }

        else
        {
            userwin = compChoice === "rock" ? false : true;
        }

        showWinner(userwin,userChoise, compChoice );





    }


}









 choices.forEach((choice) => {
  
    choice.addEventListener("click", () => {

      const userChoise =choice.getAttribute("id");
      
      playGame(userChoise);

    })

});