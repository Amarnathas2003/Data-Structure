function plusOne(digits) {


    if (digits.length == 1) {

        let array = [];
        const nextValue = digits[0] + 1;

        array[0] = nextValue;

        const toString = array.toString().split('').map(Number);

        return toString;
    }

    let value = '';
    for (let i = 0; i < digits.length; i++) {
        value += digits[i];
    }

    const convert = value.split('').map(Number)

    const lastValue = convert[convert.length - 1] + 1

    convert[convert.length - 1] = lastValue;

    console.log(convert)

    return convert;
};


const digits = [9, 9]
plusOne(digits)

