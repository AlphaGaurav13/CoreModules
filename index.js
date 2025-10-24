function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}


function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}


function  armstrongNumber(n) {
  let sum = 0;
  let temp = n; 
  while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** 3;
    temp = Math.floor(temp / 10);
  }
  return sum === n;
}

module.exports = {
  add,
  subtract,
  multiply,
  factorial,
  armstrongNumber
};