// Linear Search //

let myArray = [5, 34, 65, 12, 77, 35];
let target = 77;

const linearSearch = (arr, tar) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === tar) {
      return i;
    }
  }
  return -1;
};

console.log(linearSearch(myArray, target));

// Binary Search //

let sortedArray = [5, 7, 34, 54, 65, 77];
let key = 54;

const binarySearch = (sortedArray, key) => {
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (sortedArray[middle] === key) {
      return middle;
    } else if (sortedArray[middle] < key) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
};

console.log(binarySearch(sortedArray, key))

// Factorial //

const factorial = num => {
  let result = 1;
  for (let i = 2; i <= num; i++) {
      result = result * i
  }
  return result
}

console.log(factorial(5))

// Fibonacci //

const fibonacci = (n) => {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

console.log(fibonacci(8));

// Count chars // 

const myString = "Ceci est une chaîne de caractère";

const maxChar = myString => {
  let chars = {};
  for (let char of myString) {
        chars[char] = chars[char] + 1 || 1 ;
  }
  return chars;
}

console.log(maxChar(myString))

// 2D array

let myArr = [[2,4,6],[8,10,12],[14,16,18]];
let newArray = [];

for (let i=0; i < myArr.length; i++) {
  newArray.push([])
  for(let j=0; j < myArr[i].length; j++) {
    newArray[i][j] = myArr[i][j] * 2
  }
}

console.log(newArray)
