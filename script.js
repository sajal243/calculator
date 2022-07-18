
function clr(){
    document.getElementById('result').value = '';
}

function Num(val){
    document.getElementById('result').value += val;
}

function equal(){
    let inp = document.getElementById('result').value;
    let out = eval(inp);
    document.getElementById('result').value = out;
}