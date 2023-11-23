let input = document.querySelector('[dataCurrent]');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML== '='){
            string = eval(string);
            input.innerHTML = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.innerHTML = string;
        }
        else if(e.target.innerHTML == 'Del'){
            string = string.slice(0,-1);
            input.innerHTML = string;
        }
        else{
            string += e.target.innerHTML;
            input.innerHTML = string;
        }
    })
})
