let gameSeq = [];
let userSeq = [];
let colors = ["red", "yellow", "purple", "green"];
let started = false;
let level = 0;

document.addEventListener("keypress", function () {
    if (!started) {
        started = true;
        level = 0;
        gameSeq = [];
        userSeq = [];
        updateLevel();
        levelUp();
    }
});

function updateLevel() {
    document.querySelector("h2").innerText = `Level: ${level}`;
}

function levelUp() {
    level++;
    updateLevel();
    userSeq = [];
    let colIndex = Math.floor(Math.random() * 4);
    let btnColor = colors[colIndex];
    gameSeq.push(btnColor);
    flashSequence();
}

function flashSequence() {
    let i = 0;

    function flashNext() {
        if (i < gameSeq.length) {
            let color = gameSeq[i];
            let btn = document.querySelector(`.${color}`);
            flashBtn(btn);
            i++;
            setTimeout(flashNext, 500); 
        }
    }

    flashNext(); 
}

function flashBtn(btn) {
    btn.classList.add("flashbtn");
    setTimeout(() => {
        btn.classList.remove("flashbtn");
    }, 250);
}

let btns = document.getElementsByClassName("btn");
for (let btn of btns) {
    btn.addEventListener("click", function () {
        let userColor = this.classList[1];
        userSeq.push(userColor);
        flashBtn(this);
        checkAnswer(userSeq.length - 1);
    });
}

function checkAnswer(index) {
    if (userSeq[index] === gameSeq[index]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        resetGame();
    }
}

function resetGame() {
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
    document.querySelector("h2").innerText = "Game Over! Press Any Key to Restart";
}
