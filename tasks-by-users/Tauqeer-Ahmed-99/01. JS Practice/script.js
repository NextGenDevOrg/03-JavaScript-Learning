const count1 = 0;
let count2 = count1;


let count = document.getElementById('count');

let pre_enteries = document.getElementById('pre-enteries');

function add (){
    count2 = count2 + 1;
    count.textContent = count2;
}

function save(){
    let enteries = count2 + " - ";
    pre_enteries.textContent = pre_enteries.textContent + enteries;
    count.textContent = count1;
    count2 = 0;
}