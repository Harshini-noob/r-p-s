let arr = ["rock", "paper", "scissors"];
let p = 0;
let c = 0; 

function comp() {
    let r = Math.floor(Math.random() * 3); 
    $(".c").text("COMPUTER: " + arr[r]);
    return r; 
}

function printScore(playerScore, computerScore) {
    $(".scorep").text("Player score: " + playerScore);
    $(".scorec").text("Computer score: " + computerScore);
}

function swtchCases(event) {
    $(".p").text("PLAYER: "+event);
    return arr.indexOf(event); 
}

$("button").on("click", function () {
    let s = $(this).attr("id"); 
    let playerChoice = swtchCases(s);
    let computerChoice = comp();

    
    if (playerChoice === computerChoice) {
        $(".display").text("IT'S A TIE");
    } else if (
        (playerChoice === 0 && computerChoice === 2) || 
        (playerChoice === 1 && computerChoice === 0) || 
        (playerChoice === 2 && computerChoice === 1)    
    ) {
        $(".display").text("YOU WON");
        p++; 
    } else {
        $(".display").text("YOU LOSE");
        c++; 
    }

    
    printScore(p, c);
});
