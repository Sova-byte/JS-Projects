const parent = document.getElementById('parent');
const result = document.querySelector('h3');
const move = document.querySelector('h2');
let user_score = 0;
let cpu_score = 0;
const arr = ['rock', 'paper', 'scissors'];
parent.addEventListener('click', (e) => {
    const user_move = e.target.alt;
    const cpu_move = arr[Math.floor(Math.random() * 3)];
    if (user_move == 'rock' && cpu_move == 'paper' || user_move == 'paper' && cpu_move == 'scissors' || user_move == 'scissors' && cpu_move == 'rock') {
        cpu_score++;
        document.querySelector('h4').textContent="CPU Won";
    }
    else if (cpu_move == 'rock' && user_move == 'paper' || cpu_move == 'paper' && user_move == 'scissors' || cpu_move == 'scissors' && user_move == 'rock') {
        user_score++;
        document.querySelector('h4').textContent="You Won";
    }
    else {
        document.querySelector('h4').textContent="Tie";
    }
    result.textContent = `Your Score: ${user_score} VS Computer Score: ${cpu_score}`;
    move.textContent = `CPU chooses ${cpu_move}`;
    
})