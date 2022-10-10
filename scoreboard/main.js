import ScoreboardView from './scoreboardJS/ScoreboardView.js'

const root = document.getElementById("app")
let playerOneName = "Enock";
let playerTwoName = "Male"

let playerOneScore = 0;
let playerTwoScore = 0
const view = new ScoreboardView(root, {playerOneName, playerTwoName,onScoreChange(player, incre){
    const difference = incre === "minus" ? -1 : 1

    if(player === "one"){
        playerOneScore = Math.max(difference + playerOneScore, 0)
    }else{
        playerTwoScore = Math.max(difference + playerTwoScore,0)
    }

    view.updateScore(playerOneScore, playerTwoScore)
}}
)