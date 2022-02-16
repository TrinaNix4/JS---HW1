// Loops
// 1. Write a for loop that logs only logs even numbers from 0 - 10; ie 0,2,4,..10
/* let i = 1
for(i=0; i<=10; i++){
  if (i % 2 == 0){
    console.log('The number' + ' ' + i + ' ' + 'is even.')
  }
} */

// 2. Write a for that logs numbers from 10 - 0; ie 10,9,8...0
/* let i = 1; 
for(i = 10; i>=0; i--){
  console.log(i) 
}*/
// 3. write a for loop that loops through this array and logs 'odd/even' based on wether the number is odd even
//for loop is used to run a set number of times; loops through until counter reaches a specified number
//repeats a block of code until a certain condition is met

let nums = [1,2,3,4,5,6,7,8,9,10]
for(let i = 1; i <=nums.length; i++){
  if(i % 2 == 0){
    console.log(i +' '+ 'is even.')
  }else if(i % 2 == 1){
    console.log(i + ' ' + 'is odd.')
  }
}


// 4. write a while loop that starts at 0 and counts up to 10 ie: 0,1,2,3....10
//a while loop loops through a block of code until the specified condition evaluates to true; variable is declared externally 
/* let i = 0;
while (i <= 10){
  console.log(i); 
  i++; 
}  */
// 5. Look closely at the code below

/* const isOdd = (num) =>{
    return num % 2 === 1
}

if(isOdd(2)){
    console.log('is Odd')
} else {
    console.log('is Even')
}   */

// 6. what will this log? 'is Odd'
// 7. what is the value of isOdd(2) should be even but it's logging odd  
// 8. Fix the isOdd function to make this work

// Functions
// 1. Write a function that takes a positive number and prints all even numbers from 0 – number
const allEvenNums = (num) => {
  for(i=0; i<=num; i+=2) {
    console.log(i);
  }
}
allEvenNums(110);

// 2. Write a function that takes an array and returns the sum of all the numbers
const myArray = [];

myArray.forEach((num)) => {
  console.log(num)
}


// 3. Write a function that returns the number of vowels in string
// 4. Write a function that takes a math operator, as a string, ('*','/','+','-') and two numbers and returns the result
// 5. Write a function that takes an array of strings and a string and returns true or false if the string is in the array.
// 6. write a function that takes a person object {firstname: 'joe', lastname: 'shmoe', age: 50} and returns a formatted string "joe shmoe is 50 years old"
// 7. write a function that takes an array that removes the first and last items and return that new array
// 8. write a function that swaps the last and first items of an array 
// 9. write a function that takes a array and a second argument and returns the index in the array of the second argument
// 10. write a function that takes a number and uses a ternary to return if the number is odd or even.
// 11. Write a function that prints all  numbers from 0 – 10