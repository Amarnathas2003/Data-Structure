function getFactorial(number) {

    if (number === 0) {
        return 1;
    }

    return number * getFactorial(number - 1)
}

console.log(getFactorial(5))



function sumOfNumbers(n) {

    if (n === 1) {
        return 1;
    }

    return n + sumOfNumbers(n - 1);
}

console.log(sumOfNumbers(10))


function fibonacciSerious(a, b, n) {

    if (n == 0) {
        return;
    }

    const c = a + b;
    console.log(c)
    //Pass a b n values which has passed previously. It Will consider it As Previous Values
    fibonacciSerious(b, c, n - 1);
}

const a = 0;
const b = 1;
console.log(a)
console.log(b)
const n = 7;
fibonacciSerious(a, b, n - 2)




function printInRang(start, end) {

    if (end == start) {
        return;
    }

    printInRang(start, end - 1);
    console.log(end);

}
const start = 1;
const end = 10;

printInRang(start, end)