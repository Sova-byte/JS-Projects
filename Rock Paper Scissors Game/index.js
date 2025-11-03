const parent = document.getElementById('parent');
const result = document.querySelector('h3');
const move = document.querySelector('h2');
const winsAgainst = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
};
let user_score = 0;
let cpu_score = 0;
const arr = ['rock', 'paper', 'scissors'];
parent.addEventListener('click', (e) => {
    if (!e.target.closest('img')) return; // Ignore non-image clicks
    const user_move = e.target.dataset.move;
    const cpu_move = arr[Math.floor(Math.random() * 3)];
    if (winsAgainst[user_move] === cpu_move) {
        // User wins
        user_score++;
        move.innerHTML = `CPU chooses ${cpu_move}: <span style="color: blue;">You Won</span>`;
    } else if (winsAgainst[cpu_move] === user_move) {
        // CPU wins
        cpu_score++;
        move.innerHTML = `CPU chooses ${cpu_move}: <span style="color: red;">CPU Won</span>`;
    } else {
        // Tie
        move.innerHTML = `CPU chooses ${cpu_move}: <span style="color: green;">Tie</span>`;
    }
    result.innerHTML = `Your Score: <span style="color: blue;">${user_score}</span>  Computer Score: <span style="color: red;">${cpu_score}</span>`;

})

 document.getElementById('reset').addEventListener('click', () => {
    user_score = 0;
    cpu_score = 0;
    result.innerHTML = 'Your Score: <span style="color: blue;">0</span>  Computer Score: <span style="color: red;">0</span>';
    move.innerHTML = 'Choose your move!';
});