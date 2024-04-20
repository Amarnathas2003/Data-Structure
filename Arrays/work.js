const numbers = [97796, 463, 4644, 5253, 2757583, 788788, 111135, 3795, 999911, 4486, 2864, 846];

function hasOddAndEvenDigits(num) {
    const numString = String(num);
    
    let hasOdd = false;
    let hasEven = false;
    
    for (let i = 0; i < numString.length; i++) {
        const digit = parseInt(numString[i]);
        if (digit % 2 === 0) {
            hasEven = true;
        } else {
            hasOdd = true;
        }
    }
    
    return hasOdd && hasEven;
}

const result = [];

for (let i = 0; i < numbers.length; i++) {
    if (hasOddAndEvenDigits(numbers[i])) {
        result.push(numbers[i]);
    }
}

console.log(result);