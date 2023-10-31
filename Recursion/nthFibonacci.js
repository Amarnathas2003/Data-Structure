

function getnthFibonacci(n) {

    if (n < 2) {
        return n;
    }

    return getnthFibonacci(n - 1) + getnthFibonacci(n - 2);
}

const value = 4;

console.log(getnthFibonacci(value));