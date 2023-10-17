const input = document.getElementById('input');
const resultInput = document.getElementById('resultInput');

const allowedKeys = ['7', '8', '9', '4', '5', '6', '1', '2', '3','+','-','*','/','.','0'];

document.querySelectorAll('.keyboard').forEach(function(keyboardBtn){
    keyboardBtn.addEventListener('click', function(){
        const value = keyboardBtn.dataset.btn;
        input.value += value;
    })
})

document.getElementById('clear').addEventListener('click', function(){
    input.value = '';
    resultInput.value = '';
    input.focus();
})

document.getElementById('equal').addEventListener('click', calculate);


function calculate(){
    const result = eval(input.value);
    resultInput.value = result;
    
}

input.addEventListener('keydown', function(ev){
    ev.preventDefault();
    if(allowedKeys.includes(ev.key)){
        input.value += ev.key;
        return
    }
    if(ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1);
    }

    if(ev.key === 'Enter'){
        calculate();
    }
})