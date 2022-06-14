const game = () => {
  let pScore = 0,
    cScore = 0;

  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const compHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    const compOptions = ["rock", "paper", "scissors"];

    options.forEach((opts) => {
      opts.addEventListener("click", function () {
        const rndNum = Math.floor(Math.random() * 3);
        const compChoice = compOptions[rndNum];
        playerHand.src = "./assets/rock.png";
        compHand.src = "./assets/rock.png";

        setTimeout(() => {
          comparison(compChoice, this.textContent);
          playerHand.src = `./assets/${this.textContent}.png`;
          compHand.src = `./assets/${compChoice}.png`;
        }, 2000);

        playerHand.style.animation = "shakePlayer 2s ease";
        compHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const compScore = document.querySelector(".computer-score p");

    playerScore.textContent = pScore;
    compScore.textContent = cScore;
  };

  const comparison = (compChoice, playerChoice) => {
    const win = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };
    const winner = document.querySelector(".winner");
    if (win[playerChoice] === compChoice) {
      pScore += 1;
      updateScore();
      winner.textContent = "Player Wins!";
      return;
    } else if (playerChoice === compChoice) {
      winner.textContent = "Draw!";
      return;
    } else {
      cScore += 1;
      updateScore();
      winner.textContent = "Computer Wins!";
      return;
    }
  };

  startGame();
  playMatch();
};

game();
