const form= document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const Boy= document.getElementById('boy');
    const Girl= document.getElementById('girl');
    const num=Math.floor(Math.random()*10);
    const l1=Boy.value.length;
    const l2=Girl.value.length;

    const res= Math.pow(l1+l2+num,3)%101;

    document.querySelector('h2').textContent=`Result: ${res}%`;
    form.reset();
})