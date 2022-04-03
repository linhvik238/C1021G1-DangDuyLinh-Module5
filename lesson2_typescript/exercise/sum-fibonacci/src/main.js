function fibonacci(n) {
    if (n < 2) {
        return n;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
var fibonacciArray = [];
var sum = 0;
var n = 20;
for (var i = 0; i < n; i++) {
    fibonacciArray.push(fibonacci(i));
    sum += fibonacci(i);
}
for (var _i = 0, fibonacciArray_1 = fibonacciArray; _i < fibonacciArray_1.length; _i++) {
    var fibonacci_1 = fibonacciArray_1[_i];
    console.log(fibonacci_1);
}
console.log('Sum of fibonacci array with ' + n + ' number is: ' + sum);
