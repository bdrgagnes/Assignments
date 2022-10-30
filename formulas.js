let num1 = prompt('first number:', '');
let num2 = prompt('second number:', '');

if(parseInt(num1) > parseInt(num2)){
    console.log('Number 1 is bigger: ', num1);
}
else{
    console.log('Number 2 is bigger: ', num2);
}

let number = prompt('Number to evaluate:', '');

if(parseInt(number) % 2){
    console.log("The number is odd");
}
else{
    console.log("The number is even");
}