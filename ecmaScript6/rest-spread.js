// rest -> en uno, varios
function sum(…numbers) {
  var result = 0;
  numbers.forEach(function (number) {
    result += number;
  });
  return result;
}
console.log(sum(1)); // 1
console.log(sum(1, 2, 3, 4, 5)); // 15

// spread -> varios, en uno.
function sum(a, b, c) {
  return a + b + c;
}
var args = [1, 2, 3];
console.log(sum(…args)); // 6

// Destructuración
let point = [1, 2];
let [xVal, yVal] = point;

let { x: a, y: b } = point;