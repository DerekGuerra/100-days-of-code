// console.log("**Problem 1**");

// function isEven(num) {
//   if (num % 2 === 0) {
//     return "true";
//   }
//   else {
//     return "False";
//   }
// }


// console.log("**Problem 2**");

function factorial(num) {
  var result = 1;

  for (var i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}



// console.log("**Problem 3**");


function kebabToSnake(str) {
  var newStr = str.replace(/-/g , "_");
  return newStr;
}
