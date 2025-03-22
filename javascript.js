//String Manipulation Functions:

/*Reverse a string*/

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello")); 

/*Count characters*/

function countCharacters(str) {
  return str.length;
}

console.log(countCharacters("hello"));


/* Capitalize words*/

function capitalizeWords(sentence) {
  return sentence
      .split(' ') 
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
      .join(' ');
}

console.log(capitalizeWords("hello world, this is a test.")); 


//Array Functions

/*Maximum and Minimum*/

function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}

const numbers = [3, 7, 1, 9, 4];
console.log(findMax(numbers)); // Output: 9
console.log(findMin(numbers)); // Output: 1

/*Sum of Array*/

function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumArray([3, 7, 1, 9, 4])); // Output: 24


/*Filter Array*/

function filterArray(arr, condition) {
  return arr.filter(condition);
}

const result = filterArray([3, 7, 1, 9, 4], num => num >= 5);
console.log(result); // Output: [7, 9]