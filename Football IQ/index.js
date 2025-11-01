const form = document.querySelector('form');
const res = document.querySelector('button');
const answer = {
    q1: "France",
    q2: "Cristiano Ronaldo",
    q3: "Manchester United",
    q4: "1930",
    q5: "Pele"
}
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let score = 0;
    const data = new FormData(form);
    for (let [name, value] of data.entries()) {
        if (answer[name] == value) {
            score++;
        }
    }

    res.textContent = `You Scored ${score} out of 5`;


})