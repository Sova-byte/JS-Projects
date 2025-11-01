// const red=document.getElementById('Red');
// const blue=document.getElementById('Blue');
// const green=document.getElementById('Green');
// const yellow=document.getElementById('Yellow');
// const aqua=document.getElementById('Aqua');
const bg=document.querySelector('body');
const parent=document.querySelector('div');
// red.addEventListener('click', ()=>{
//     bg.style.backgroundColor="red"
// })
// green.addEventListener('click', ()=>{
//     bg.style.backgroundColor="green"
// })
// blue.addEventListener('click', ()=>{
//     bg.style.backgroundColor="blue"
// })
// yellow.addEventListener('click', ()=>{
//     bg.style.backgroundColor="yellow"
// })
parent.addEventListener('click',(e)=>{
    bg.style.backgroundColor = e.target.id;
})