console.log('my function is making billion dollar in an hour!!');

function add(...arr) {
  let sum = 0;
  arr.forEach((e) => (sum += e));
  return sum;
}
