//  Question 1
//  Write a function that takes an array of mixed numbers (positive and negative) and uses both a for loop and if
//  statements to calculate and return the sum of all negative numbers in the array.
function sumNegativeNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(sumNegativeNumbers([-10, 5, -3, 8])); // Output: -13

// Question 2
// Create a function that accepts an array of strings and uses a for loop along with if statements to count how many 
// strings in the array contain the letter "a". Return this count.
function countStringsWithA(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase().includes("a")) {
      count++;
    }
  }
  return count;
}
console.log(countStringsWithA(["apple", "banana", "cherry", "fig"])); // Output: 3

// Question 3
// Write a function that takes an array of numbers and a threshold value as arguments. Use a for loop and if statements
//  to return a new array containing all numbers that are greater than the threshold.
function filterGreaterThanThreshold(arr, threshold) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > threshold) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(filterGreaterThanThreshold([10, 20, 5, 3, 15], 10)); // Output: [20, 15]
// Question 4
// Create a function that accepts an array of integers and uses a while loop to find the first negative number 
// in the array. If no negative number is found, return null.

function findFirstNegative(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] < 0) {
      return arr[i];
    }
    i++;
  }
  return null;
}
console.log(findFirstNegative([3, 7, -5, 2, -8])); // Output: -5
// Question 5
// Write a function that takes an array of numbers and returns the product of all positive numbers. Use a for loop and
//  if statements to multiply only the positive numbers.

function productOfPositives(arr) {
  let product = 1;
  let hasPositive = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      product *= arr[i];
      hasPositive = true;
    }
  }
  return hasPositive ? product : 0; // Return 0 if no positive numbers
}
console.log(productOfPositives([-2, 5, 3, -7])); // Output: 15

// Question 6
// Create a function that takes an array of numbers and returns a new array with each positive number squared and
//  negative numbers unchanged. Use a for loop and if statements for this transformation.

function transformArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result.push(arr[i] ** 2);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(transformArray([-2, 5, 3, -7])); // Output: [-2, 25, 9, -7]

// Question 7
// Write a function that accepts an array of integers and checks how many of them are even and how many are odd using a 
// for loop and if statements. Return an object with the counts.

function countEvenAndOdd(arr) {
  let counts = { even: 0, odd: 0 };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      counts.even++;
    } else {
      counts.odd++;
    }
  }
  return counts;
}
console.log(countEvenAndOdd([1, 2, 3, 4, 5])); // Output: { even: 2, odd: 3 }
// Question 8
// Create a function that takes an array of numbers and returns the average of all the positive numbers. Use a for loop 
// to sum the positive numbers and then divide by the count of positive numbers.
function averageOfPositives(arr) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
      count++;
    }
  }
  return count > 0 ? sum / count : 0; // Return 0 if no positive numbers
}
console.log(averageOfPositives([-2, 5, 3, -7])); // Output: 4
