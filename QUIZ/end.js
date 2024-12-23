const username = document.getElementById('username');
const saveScorebtn = document.getElementById('saveScorebtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');


const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH = 5;


finalScore.innerText = ` ${mostRecentScore !== null ? mostRecentScore : '0'}`;

username.addEventListener("keyup", () => {
    saveScorebtn.disabled = !username.value.trim();
});

const saveHighscore = (e) => {
    console.log("Clicked the save button!");
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);


    highScores.splice(MAX_HIGH);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.href = "/";
};
