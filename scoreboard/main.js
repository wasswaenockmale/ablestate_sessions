import ScoreboardView from './scoreboardJS/ScoreboardView.js'

const root = document.getElementById("app")
let playerOneName = "Enock";
let playerTwoName = "Male"
const view = new ScoreboardView(root, {playerOneName, playerTwoName,onScoreChange(playerOne,playerTwo){
    console.log(playerOne,playerTwo)
}}
)