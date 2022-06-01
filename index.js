var a,b;

a=num1;
b=num2;

const num1 = parseInt (prompt ("Enter the first number"));
const num2= parseInt (prompt("Enter the second number"));

const sum = num1 + num2;

console.log (`The sum of ${num1} and ${num2} is ${sum}`);

function add (a, b){
    return a + b;
}

function subtract (a,b) {
    return a -b ;
}

function multiply (a,b) {
    return a * b;
}

function divide (a,b) {
    return a/b;
}

function increment(n) {
    return n+1;
}

function decrement(n) {
    return n-1;
}

function makeInt(n){
    return parseInt(n, 10);

}

function preserveDecimal(n) {
    return parseFloat(n)

}
