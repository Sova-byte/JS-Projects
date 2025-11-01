const result = document.getElementById('res');
setInterval(() => {
    const current_time = Date.now(); // current date ko milliseconds me convert kra
    const fifa_time = new Date(2026, 6, 11).getTime(); //new date ko milliseconds me convert kra
    let timer = fifa_time - current_time;

    // millisecond

    const day = Math.floor((timer) / (1000 * 60 * 60 * 24)); // milliseconds to days
    timer %= 1000 * 60 * 60 * 24;// remaining milliseconds

    const hour = Math.floor((timer) / (1000 * 60 * 60)); // ms to hours
    timer %= 1000 * 60 * 60;// remaining milliseconds

    const minute = Math.floor((timer) / (1000 * 60)); // ms to minutes
    timer %= 1000 * 60;// remaining milliseconds

    const second = Math.floor((timer) / (1000)); // ms to seconds

    result.textContent = ` ${day} Days : ${hour} Hours : ${minute} Minutes : ${second} Seconds`;
}, 1000)

// const current_time = Date.now(); // current date ko milliseconds me convert kra
// const fifa_time = new Date(2026,6,11).getTime(); //new date ko milliseconds me convert kra
// let timer = fifa_time - current_time;

// // millisecond

// const day = Math.floor((timer)/(1000*60*60*24)); // milliseconds to days
// timer %= 1000*60*60*24;// remaining milliseconds

// const hour = Math.floor((timer)/(1000*60*60)); // ms to hours
// timer %= 1000*60*60;// remaining milliseconds

// const minute = Math.floor((timer)/(1000*60)); // ms to minutes
// timer %= 1000*60;// remaining milliseconds

// const second = Math.floor((timer)/(1000)); // ms to seconds

// result.textContent =` ${day} Days : ${hour} Hours : ${minute} Minutes : ${second} Seconds`;


