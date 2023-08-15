let nira = confirm("Here we Go: Lets play rock paper and sissors");
if (nira){
    let player = prompt("CHOOSE ROCK PAPER OR SISSORS");
    if (player){
        let playerOne = player.trim().toLowerCase();
        if (playerOne == "rock"||
        playerOne == "paper"
        || playerOne == "sissors")
        {
            let computer = Math.floor(Math.random() *3 +1);
        
            computerChoose = computer ==1 ?"rock"
            :2 ?"paper"
            :"sissors";

            let result = playerOne ===computer ? "Tie"
            :playerOne == "rock" && computerChoose == "paper" ? `You: ${playerOne} \n Computer: ${computerChoose}\n Computer winsnsssssss`
            :playerOne == "paper" && computerChoose == "sissors" ? `You: ${playerOne} \n Computer: ${computerChoose}\n Computer winsnsssssss`
            :playerOne == "sissors" && computerChoose == "rock" ? `You: ${playerOne}  \n Computer: ${computerChoose}\n Computer winsnsssssss`
            : `You: ${playerOne} \n Computer: ${computerChoose}\n Horrayhh You winsnsssssss`;
            alert(result);
        if (result){
            let a =confirm("you want to play again?");
            if (a){
                a == location.reload();
                
                
            }else{
             alert("See you next time")
            }
        
            

        }
        else{
            alert("Thank you for playing.")
        }
    }

    
    }
    else{
        alert("next time");
    }

}
else{
    alert("Did you change your mind? Nevermind see you next time.");
}