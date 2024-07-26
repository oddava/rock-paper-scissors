// Creating elements for DOM
const body = document.querySelector("body");
const main = document.createElement("div"),

result = document.createElement("div"),
title = document.createElement("h1"),

icons = document.createElement("div");
const playsForPlayer = document.createElement(`div`);
const iconRockPlayer = document.createElement(`i`);
const iconPaperPlayer = document.createElement(`i`);
const iconScissorsPlayer = document.createElement(`i`);

const playsForComputer = document.createElement(`div`);
const iconRockComputer = document.createElement(`i`);
const iconPaperComputer = document.createElement(`i`);
const iconScissorsComputer = document.createElement(`i`);

const score = document.createElement("h2"),

buttons = document.createElement("div");
let rockBtn = document.createElement("button"),
paperBtn = document.createElement("button"),
scissorsBtn = document.createElement("button");
const restartBtn = document.createElement("button");


const footer = document.createElement(`footer`);
let footerText = document.createElement(`a`);

// Placing elements into DOM
body.appendChild(main);
main.appendChild(result);
result.appendChild(title);
result.appendChild(icons);

icons.appendChild(playsForPlayer);
playsForPlayer.appendChild(iconRockPlayer)
playsForPlayer.appendChild(iconPaperPlayer)
playsForPlayer.appendChild(iconScissorsPlayer)

icons.appendChild(playsForComputer);
playsForComputer.appendChild(iconRockComputer)
playsForComputer.appendChild(iconPaperComputer)
playsForComputer.appendChild(iconScissorsComputer)

main.appendChild(score);

main.appendChild(buttons);
buttons.appendChild(rockBtn)
buttons.appendChild(paperBtn)
buttons.appendChild(scissorsBtn)
buttons.appendChild(restartBtn)


body.appendChild(footer);
footer.appendChild(footerText);

// Adding classes to identify the elements
main.classList.add("main")
result.classList.add("result")
title.classList.add("title")
icons.classList.add("icons")

playsForPlayer.classList.add("plays_for_player")
playsForComputer.classList.add("plays_for_computer")

iconRockPlayer.classList.add("icon-rock")
iconPaperPlayer.classList.add("icon-paper")
iconScissorsPlayer.classList.add("icon-scissors")

iconRockComputer.classList.add("icon-rock")
iconPaperComputer.classList.add("icon-paper")
iconScissorsComputer.classList.add("icon-scissors")

score.classList.add("score")
buttons.classList.add("buttons")

rockBtn.classList.add("rock")
paperBtn.classList.add("paper")
scissorsBtn.classList.add("scissors")

restartBtn.classList.add("restart")


// Filling out the content of the elements
title.innerText = "You think you can win?";
score.innerText = "0:0"

rockBtn.innerText = "Rock"
paperBtn.innerText = "Paper"
scissorsBtn.innerText = "Scissors"
restartBtn.innerText = "Restart"

footerText.innerText = "By codeJ"

// Adding attributes
footerText.setAttribute("href", "https://github.com/oddava")
footerText.setAttribute("target", "_blank")

// Styling the elements
body.style.cssText = `
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1E1E1E;
    overflow: hidden;`;

main.style.minWidth = "550px";

result.style.cssText = `
    margin-bottom: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;`;
title.style.cssText = `
    margin-bottom: 2rem;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.2;
    color: #0085ff;`;
icons.style.cssText = `
    width: 40%;
    display: flex;
    justify-content: space-between;`;
playsForPlayer.style.cssText = `
    display: flex;
    flex-direction: column;`;
playsForComputer.style.cssText = `
    display: flex;
    flex-direction: column;`;
score.style.cssText = `
    text-align: center;
    font-size: 1.2rem;
    color: #0085ff;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 2rem;`;
buttons.style.cssText = `
    width: 65%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 30px;
    margin-bottom: 1.5em;`;

buttons.querySelectorAll("button").forEach((btn) => {
    btn.style.cssText = `
    width: 100px;
    padding: 5px 0;
    border-radius: 10px;
    outline: none;
    border: none;
    background: #0085ff;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;`;
})
restartBtn.style.gridColumn = "-3/-2"
restartBtn.style.background = "transparent";
restartBtn.style.border = "2px solid #69b4ff"


icons.querySelectorAll("div").forEach((e) => {
    e.querySelectorAll("i").forEach((i) => {
        i.style.cssText = `
        font-size: 30px;
        color: #e0ffff;`;
    });
})

footer.style.cssText = `
    position: absolute;
    width: 100%;
    height: auto;
    bottom: 0;
    border-top: 1px solid #e1ffff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;`;

footerText.style.cssText = `
    text-decoration: none;
    color: #e0ffff;
    font-size: 1rem;
    font-weight: 600;
    padding: .8rem 0;`;

document.addEventListener("DOMContentLoaded", () => {
    const iconMap = {
        "rock": { player: iconRockPlayer, computer: iconRockComputer },
        "paper": { player: iconPaperPlayer, computer: iconPaperComputer },
        "scissors": { player: iconScissorsPlayer, computer: iconScissorsComputer }
    };

    function displayIcons(playerChoice, computerChoice) {
        hideItems(icons, "i");
        iconMap[playerChoice].player.style.display = "block";
        iconMap[computerChoice].computer.style.display = "block";
    }

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        return choices[Math.floor(Math.random() * 3)];
    }

    function checkWin(playerChoice) {
        const computerChoice = getComputerChoice();

        if (playerChoice === computerChoice) {
            return { playerChoice, computerChoice, status: "tie" };
        }

        const winConditions = {
            "rock": "scissors",
            "paper": "rock",
            "scissors": "paper"
        };

        const status = winConditions[playerChoice] === computerChoice ? "win" : "lost";
        return { playerChoice, computerChoice, status };
    }

    function hideItems(container, item) {
        container.querySelectorAll(item).forEach(i => {
            i.style.display = "none";
        });
    }

    hideItems(icons, "i");

    let computerScore = 0;
    let playerScore = 0;

    const titleContent = {
        "win": ["Congratulations! You Win!", "Well Done! You Guessed Correctly!", "Victory! Excellent Job!"],
        "lost": ["You Lost. Better Luck Next Time!", "You Lost. Don't Give Up!", "Defeat. Keep Trying!"],
        "tie": ["It's a Tie!", "Tie! Both Played Well", "A Tie! Great Effort from Both"]
    };

    buttons.querySelectorAll("button.rock, button.paper, button.scissors").forEach(e => {
        e.addEventListener("click", () => {
            const choice = checkWin(e.className);
            displayIcons(choice.playerChoice, choice.computerChoice);

            if (choice.status === "win") {
                playerScore += 1;
            } else if (choice.status === "lost") {
                computerScore += 1;
            }

            title.innerHTML = titleContent[choice.status][Math.floor(Math.random() * 3)];
            score.innerHTML = `${playerScore}:${computerScore}`;
        });
    });

    restartBtn.addEventListener("click", () => {
        score.innerHTML = "0:0";
        computerScore = 0;
        playerScore = 0;
        hideItems(icons, "i");
        title.innerText = "You think you can win?";
    });
});