const body = document.querySelector('body');
body.addEventListener('click', (e) => {

    const div = document.createElement('div')
    div.classList.add('circle');

    const colors = ['blue', 'red', 'green', 'yellow', 'aqua', 'pink', 'yellowgreen', 'brown', 'orange'];
    div.style.backgroundColor = colors[Math.floor(Math.random() * 9)];
    div.textContent = 'Hey';

    div.style.left = `${e.clientX-25}px`;
    div.style.top = `${e.clientY-25}px`;

    body.append(div);

    setTimeout(() => {
        div.remove();
    }, 5000);

})

