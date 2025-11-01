const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const amount = document.querySelector('input');
    const income= parseInt(amount.value);
    const res = document.querySelector('h2');
    let tax = 0;
    if (income <= 1200000) {

        tax = 0;

    } else if (income <= 1600000) {

        tax = (income - 1200000) * 0.15;

    } else if (income <= 2000000) {

        tax = (income - 1600000) * 0.20 + 60000;

    } else if (income <= 2400000) {

        tax = (income - 2000000) * 0.25 + 60000 + 80000;

    } else {

        tax = (income - 2400000) * 0.30 + 60000 + 80000 + 100000;

    }
    res.textContent = `Total Tax: ${tax}`;
    form.reset();
})