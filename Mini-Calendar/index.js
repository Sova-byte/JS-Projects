
const day = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
setInterval(() => {
    const date = new Date();
    document.getElementById('day').textContent = `${day[date.getDay()-1]}`;
    document.getElementById('date').textContent = date.getDate();
}, 1000)

