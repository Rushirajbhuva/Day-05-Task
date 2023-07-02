// Using JavaScipt ASYNC Function
//a)Print odd numbers in an array

// Define an array
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Define an async function to print odd numbers
async function printOddNumbers() {
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    // Use await to simulate an asynchronous operation
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Check if the number is odd
    if (number % 2 !== 0) {
      console.log(number);
    }
  }
}
// Call the async function
printOddNumbers();
//Output:-
1
3
5
7
9

//b)Convert all the strings to title caps in a string array

// Define an array of strings
const strings1 = ["bhuva", "rushi", "jay", "function"];

// Define an async function to convert strings to title case
async function convertToTitleCase() {
  for (let i = 0; i < strings1.length; i++) {
    const string = strings1[i];

    // Use await to simulate an asynchronous operation
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Convert the string to title case
    const titleCaseString = string.toLowerCase().replace(/(?:^|\s)\w/g, (match) => match.toUpperCase());

    // Update the array with the title case string
    strings[i] = titleCaseString;
  }

  // Print the updated array
  console.log(strings1);
}

// Call the async function
convertToTitleCase();

// //Output:-
// [ 'Bhuva', 'Rushi', 'Jay', 'Function' ]

//c)sum of all numbers in array

// Define an array of numbers
const numbers1 = [18, 25, 35, 4, 55, 69, 75, 85, 92, 10];

// Define an async function to calculate the sum
async function calculateSum() {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    // Use await to simulate an asynchronous operation
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Add the number to the sum
    sum += number;
  }

  // Print the sum
  console.log("Sum:", sum);
}

// Call the async function
calculateSum();
Output:-468

//d)Return all the prime numbers in an array

//Define an array of numbers
const numbers = [19, 25, 35, 41, 53, 61, 71, 81, 93, 10];

// Define an async function to check if a number is prime
async function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    // Use await to simulate an asynchronous operation
    await new Promise((resolve) => setTimeout(resolve, 100));

    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Define an async function to find and return all prime numbers in the array
async function findPrimeNumbers() {
  const primeNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    // Use await to simulate an asynchronous operation
    await new Promise((resolve) => setTimeout(resolve, 100));

    if (await isPrime(number)) {
      primeNumbers.push(number);
    }
  }

  // Print the prime numbers
  console.log("Prime numbers:are", primeNumbers);
}

// Call the async function
findPrimeNumbers();
//output:-Prime numbers:Prime numbers:are [ 19, 41, 53, 61, 71 ]

//e)Return all the palindromes in an array

// Define an array of strings
const strings2 = ["hhh", "mother", "bbb", "Rushiraj", "lionia"];

// Define an async function to check if a string is a palindrome
async function isPalindrome(string) {
  const reversedString = string2.split("").reverse().join("");

  // Use await to simulate an asynchronous operation
  await new Promise((resolve) => setTimeout(resolve, 100));

  return string === reversedString;
}

// Define an async function to find and return all palindromes in the array
async function findPalindromes() {
  const palindromes = [];

  for (let i = 0; i < strings.length; i++) {
    const string = strings[i];

    // Use await to simulate an asynchronous operation
    await new Promise((resolve) => setTimeout(resolve, 100));

    if (await isPalindrome(string)) {
      palindromes.push(string);
    }
  }

  // Print the palindromes
  console.log("Palindromesare:", palindromes);
}

// Call the async function
findPalindromes();
//output:-Palindromesare: [ 'hhh', 'bbb' ]

//e)Return median of two sorted arrays of the same size.

//Define two sorted arrays of the same size
const array3 = [1, 3, 5];
const array4 = [2, 4, 6];

// Define an async function to calculate the median
async function calculateMedian() {
  const mergedArray = [...array1, ...array2];
  mergedArray.sort((a, b) => a - b);

  const length = mergedArray.length;
  const mid = Math.floor(length / 2);

  // Use await to simulate an asynchronous operation
  await new Promise((resolve) => setTimeout(resolve, 100));

  if (length % 2 === 0) {
    const median = (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    console.log("Median:", median);
  } else {
    console.log("Median:", mergedArray[mid]);
  }
}

// Call the async function
calculateMedian();
//output:-Median:3.5

//f)Remove duplicates from an array

// Define an array with duplicates
const array5 = [13, 21, 33, 21, 42, 51, 13, 32, 21, 41];

// Define an async function to remove duplicates from the array
async function removeDuplicates() {
  const uniqueArray = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    // Use await to simulate an asynchronous operation
    await new Promise((resolve) => setTimeout(resolve, 100));

    if (!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  }

  // Print the array without duplicates
  console.log("Unique Array:", uniqueArray);
}

// Call the async function
removeDuplicates();
//OUTPUT:-Unique Array:- [
  13, 21, 33, 42,
  51, 32, 41//]

  //g)Rotate an array by k times

  // Define an array
const array7 = [1, 2, 3, 4, 5, 6, 7];

// Define the number of rotations
const k = 3;

// Define an async function to rotate the array
async function rotateArray() {
  const rotations = k % array7.length;
  const rotatedArray = [...array7.slice(rotations), ...array7.slice(0, rotations)];

  // Use await to simulate an asynchronous operation
  await new Promise((resolve) => setTimeout(resolve, 100));

  // Print the rotated array
  console.log("Rotated Array:", rotatedArray);
}

// Call the async function
rotateArray();
//Output:-Rotated Array: [
 // 4, 5, 6, 7,
 // 1, 2, 3
//]

//*******************************************************************************************************************

// Following Using IIFE Function

//a)Find odd number from an aray
// Define an array
const array = [13, 29, 37, 43, 53, 65, 73, 87, 93, 11];

// IIFE to print the odd number from the array
(function () {
  for (let i = 0; i < array.length; i++) {
    const number = array[i];
    if (number % 2 !== 0) {
      console.log(number);
    }
  }
})();
//Output:-
13
29
37
43
53
65
73
87
93
11

//b)Convert all the strings to title caps in a string array

// Define a string array
const stringArray = ["rushiraj", "bhuva", "het", "ramani"];

// IIFE to convert strings to title case
(function (arr) {
  const titleCasedArray = arr.map((string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  });

  console.log(titleCasedArray);
})(stringArray);
//Output:-
//[ 'Rushiraj', 'Bhuva', 'Het', 'Ramani' ]

//c)Sum of all numbers in an array

// Define an array of numbers
const numbers5 = [10, 20, 30, 40, 50];

// IIFE to calculate the sum of numbers
(function (arr) {
  const sum = arr.reduce((total, number) => total + number, 0);
  console.log("Sum:", sum);
})(numbers5);

// Output:-Sum:-150

//d)Return all the prime numbers in an array

// Define an array of numbers
const numbers4 = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// IIFE to filter and return prime numbers
(function (arr) {
  const isPrime = (number4) => {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number4 % i === 0) {
        return false;
      }
    }
    return true;
  };

  const primeNumbers = arr.filter(isPrime);
  console.log("Prime Numbers:", primeNumbers);
})(numbers4);

//Output:-Prime Numbers: [ 2, 3, 5, 7 ]

//e)returns the all pelindrom number

// Define an array of strings
const strings = ["lala", "yuy", "lol", "nothing", "sure"];

// IIFE to filter and return palindromes
(function (arr) {
  const isPalindrome = (string) => {
    const reversedString = string.split("").reverse().join("");
    return string === reversedString;
  };

  const palindromeStrings = arr.filter(isPalindrome);
  console.log("Palindromes:", palindromeStrings);
})(strings);

//Output:-Palindromes: [ 'yuy', 'lol' ]