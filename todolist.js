const input = document.querySelector('input');
const btn = document.querySelector('.user > button');
btn.addEventListener('click', addList);

function addList(e) {
    const list = document.querySelector('.list');
    const done = document.querySelector('.done');
    const newLi = document.createElement('li');
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class = "fa fa-check" > </i>';
    delBtn.innerHTML = '<i class = "fa fa-trash" > </i>';
    if (input.value !== '') {
        newLi.textContent = input.value;
        input.value = '';
        list.appendChild(newLi);
        newLi.appendChild(delBtn);
        newLi.appendChild(checkBtn);
    }
    checkBtn.addEventListener('click', function() {
        const parent = this.parentNode;
        parent.remove();
        done.appendChild(parent);
        checkBtn.style.display = 'none';
    });
    delBtn.addEventListener('click', function() {
        const parent = this.parentNode;
        parent.remove();
    });

}