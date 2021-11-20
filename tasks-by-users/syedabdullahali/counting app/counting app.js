const box = document.getElementById("currentresult");

let countresult = 0;


function add(){
countresult += 1 
document.getElementById("currentresult").innerHTML = countresult
}

function decrease(){
  countresult -= 1 
  document.getElementById("currentresult").innerHTML = countresult
}

function resetbtn(){
  document.getElementById("currentresult").innerHTML = countresult
  countresult = 0
}




 




