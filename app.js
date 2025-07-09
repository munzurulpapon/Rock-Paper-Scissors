let  userScore =0;
 let compScore=0;
 const msg =document.querySelector("#msg");


 const  choices =document.querySelectorAll(".choice");


const computerChoice = () => {

   const options = ["rock", "paper", "scissors"];
  const randIdx= Math.floor(Math.random()*options.length);
   return  options[randIdx];



}

const drawGame=()   => {

console.log("It's a draw!");
msg.innerText = "It's a draw!";
msg.style.backgroundColor = "#081b31";

}


const showWinner = (userwin) => {
if(userwin) {
 console.log("You win!");
  msg.innerText = "You win!";
  msg.style.backgroundColor = "green";

  
}
else
{
    console.log("Computer wins!");
    msg.innerText = "Computer wins!";
    msg.style.backgroundColor = "red";
}


}



const playGame = (userChoise) => {
 console.log("User choice:", userChoise);

 const compChoice= computerChoice();
    console.log("Computer choice:", compChoice);

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

        showWinner(userwin);





    }


}









 choices.forEach((choice) => {
  
    choice.addEventListener("click", () => {

      const userChoise =choice.getAttribute("id");
      
      playGame(userChoise);

    })

});