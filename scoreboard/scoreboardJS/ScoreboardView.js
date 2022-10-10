export default class ScoreboardView{
    constructor(root, {playerOneName, playerTwoName, onScoreChange}={}){
        this.root = root;

        this.root.innerHTML = `
        <div class="scoreboard">
            <div class="scoreboard__name scoreboard__name-one" data-for-player="one" >Player One</div>
            <div class="scoreboard__name scoreboard__name-two" data-for-player="two">Player Two</div>
            <div class="scoreboard__score">0</div>
            <div class="scoreboard__score">0</div>

            <div class="scoreboard__controls">
                <button class="scoreboard__control-button">-</button>
                <button class="scoreboard__control-button">+</button>
            </div>
            <div class="scoreboard__controls">
                <button class="scoreboard__control-button">-</button>
                <button class="scoreboard__control-button">+</button>
            </div>
        </div>
        `

        this.root.querySelectorAll(".scoreboard__control-button").forEach(element => {
            element.addEventListener("click",()=>{
                onScoreChange(playerOneName, playerTwoName);
            })
        });
    }
}