function fibonacci (n : number): number {
    if (n < 2) {
        return n;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

let fibonacciArray = [];
let sum = 0;
let n = 20;

for (let i = 0; i < n; i++) {
    fibonacciArray.push(fibonacci(i));
    sum += fibonacci(i);
}

for (let fibonacci of fibonacciArray) {
    console.log(fibonacci);
}

console.log('Sum of fibonacci array with ' + n  + ' number is: ' + sum);
