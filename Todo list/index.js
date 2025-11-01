const form = document.querySelector('form');
const result = document.getElementById('res');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = input.value.trim();
    // console.log(text);
    if (text == "")
        return;

    const div = document.createElement('div');
    div.classList.add('list');

    const buttondiv = document.createElement('div');

    const task = document.createElement('span');
    task.textContent = text;
    task.style.marginRight='20px';
    

    const delete_task = document.createElement('button');
    delete_task.classList.add('del');
    delete_task.textContent = 'Delete';

    const done_task = document.createElement('button');
    done_task.classList.add('don')
    done_task.textContent = 'Done';
    buttondiv.append(done_task, delete_task);
    div.append(task, buttondiv);
    result.append(div);

    done_task.addEventListener('click',()=>{
        task.style.textDecoration = 'line-through';
        task.style.color = '#a5a4a4ff';
        done_task.remove();
    })

    delete_task.addEventListener('click',()=>{
        div.remove();
    })

    form.reset();
})