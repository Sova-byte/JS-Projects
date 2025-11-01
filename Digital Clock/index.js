const box=document.querySelector('div');
setInterval(()=>{
    const time = new Date();
box.textContent=time.toLocaleTimeString();
},1000)

