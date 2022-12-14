const sum = (addend1, addend2) => addend1 + addend2;

const difference = (minuend, subtrahend) => subtrahend - minuend;

const product = (multiplicand, multiplier) => multiplicand * multiplier;

const divide = (x1, x2) => x1 / x2;

const arr = {
    sum,
    difference,
    product,
    divide,
}

module.exports =arr;