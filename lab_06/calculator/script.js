let numb = Number(prompt('Ведіть число'));
let value = prompt('Ведіть значення');
let numb_2 = Number(prompt('Ведіть друге число'));

console.log(numb, numb == NaN);

if (Number.isNaN(numb) || Number.isNaN(numb_2) ){
    alert("Ви написали не число");
}
else{
    if (value == '+') {
        alert(numb + numb_2);
    }
    
    else if (value == '-') {
        alert(numb - numb_2);
    }
    
    else if (value == '*') {
        alert(numb * numb_2);
    }
    
    else if (value == '/') {
        alert(numb / numb_2);
    }
    
    else{
        alert("Ви вказали не значення");
    }
}
    