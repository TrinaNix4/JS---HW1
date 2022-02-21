// Loops
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Loops: Question 1~~~~~~~~~~~~~~~~~~~~~~~~~~~')
// 1. Write a for loop that logs only logs even numbers from 0 - 10; ie 0,2,4,..10
let i = 1
for(i=0; i<=10; i++){
  if (i % 2 == 0){
    console.log('The number' + ' ' + i + ' ' + 'is even.')
  }
} 

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Loops: Question 2~~~~~~~~~~~~~~~~~~~~~~~~~~~')
// 2. Write a for that logs numbers from 10 - 0; ie 10,9,8...0
//let i = 1; 
//for(i = 10; i>=0; i--){
 // console.log(i) 
//}

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Loops: Question 3~~~~~~~~~~~~~~~~~~~~~~~~~~~')
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

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Loops: Question 4~~~~~~~~~~~~~~~~~~~~~~~~~~~')
// 4. write a while loop that starts at 0 and counts up to 10 ie: 0,1,2,3....10
//a while loop loops through a block of code until the specified condition evaluates to true; variable is declared externally 
//let i = 0;
//while (i <= 10){
 // console.log(i); 
  //i++; 
//}  

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Loops: Question 5~~~~~~~~~~~~~~~~~~~~~~~~~~~')
// 5. Look closely at the code below

const isOdd = (num) =>{
    return num % 2 === 1
}

if(isOdd(2)){
    console.log('is Odd')
} else {
    console.log('is Even')
}  

// 6. what will this log? 'is Odd'
// 7. what is the value of isOdd(2) should be even but it's logging odd  
// 8. Fix the isOdd function to make this work

// Functions

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Functions: Question 1~~~~~~~~~~~~~~~~~~~~~~~~~~~')
// 1. Write a function that takes a positive number and prints all even numbers from 0 – number


const allEvenNums = (num) => {
  for(i=0; i<=num; i+=2) {
    console.log(i);
  }
} 
allEvenNums(110);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Functions: Question 2~~~~~~~~~~~~~~~~~~~~~~~~~~~')
 
// 2. Write a function that takes an array and returns the sum of all the numbers 
let sum = 0; //initializing variable 
let myNumbers = [1, 2, 3, 4, 5]

const sumOfAllNums = (numbers)=>{

  numbers.forEach((number)=>{
    sum += number; //sum = sum + number 
  } )
  return sum
}
let s1 = sumOfAllNums(myNumbers)
console.log(s1)

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Functions: Question 3~~~~~~~~~~~~~~~~~~~~~~~~~~~')
// 3. Write a function that returns the number of vowels in string
// let string = "igloo"  => should return 3 vowels
//put string into an array. go through each item in array and 
// 

const myString = 'the fish is swimming';
let vowelCount = 0; 

const numberOfVowels = (string)=> {
  const myArray = string.split('');
    //splits the string into an array
  vowelArray = ['a','e','i','o','u'];  //telling my function what are vowels 
  myArray.forEach((letter)=>{
   
    vowelArray.forEach((vowel)=>{
      if(letter === vowel)
      vowelCount++;
    })

  })
  return vowelCount
}
let result = numberOfVowels(myString); 
console.log(result)


console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Functions: Question 4~~~~~~~~~~~~~~~~~~~~~~~~~~~')
// 4. Write a function that takes a math operator, as a string, ('*','/','+','-') and two numbers and returns the result
//
let operator = '/'
let firstNum = 567
let secNum = 7567
const mathOperator = (operatorStr, num1, num2) =>{

      let var1 = `${num1} ${operatorStr} ${num2}`
      let numVar = eval(var1)
return numVar
}
//mathOperator(operator, firstNum, secNum); //this can be deleted because this will be called but live and die there so no point in leaving it 
let result4 = mathOperator(operator, firstNum, secNum)
console.log(result4)

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Functions: Question 5~~~~~~~~~~~~~~~~~~~~~~~~~~~')
// 5. Write a function that takes an array of strings and a string and returns true or false if the string is in the array.
//go through each index of the array and check if it equals the string passed in 

let str;
let substring = ['dog', 'bird','cat','hamster'];

str = 'I have a pet dog.'; 

  if (substring.some(v => str.includes(v))) {
    console.log(`Match using "${str}"`);
} else {
    console.log(`No match using "${str}"`);
}
str = "i have a pet wolf."

if (substring.some(v => str.includes(v))) {
  console.log(`Match using "${str}"`);
} else {
  console.log(`No match using "${str}"`);
}

 

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Functions: Question 6~~~~~~~~~~~~~~~~~~~~~~~~~~~')
// 6. write a function that takes a person object {firstname: 'joe', lastname: 'shmoe', age: 50} and returns a formatted string "joe shmoe is 50 years old"


let person = {firstname: 'joe', lastname: 'shmoe', age: 50}
console.log(person)
console.log(typeof person)
console.log('Item: ' + person)

const formattedString = (info) => {
return `${info.firstname} ${info.lastname} is ${info.age} years old.`
}

console.log(formattedString(person))

 
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Functions: Question 7~~~~~~~~~~~~~~~~~~~~~~~~~~~')
// 7. write a function that takes an array that removes the first and last items and return that new array
var output = [1, 2, 3, 4, 5];
var count = 1; 
function removeItems (output) {
return output.pop(count);


}
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Functions: Question 8~~~~~~~~~~~~~~~~~~~~~~~~~~~')
// 8. write a function that swaps the last and first items of an array 

 //[a, b, c, d] => [d, b, c, a]
 let array = [1, 2, 3, 4]

const swap = (array) => {
console.log(array) 
//take first item move to last
 let firstItem = array[0] //grabbing first item 
let lastItem = array[array.length - 1] 
array[array.length - 1] = firstItem  //grabbing last item and setting equal to firstItem
//take last item move it to first 
 array[0] = lastItem

}
console.log('array before swap', array)
swap(array)
console.log('array after swap' , array)

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Functions: Question 9~~~~~~~~~~~~~~~~~~~~~~~~~~~')

// 9. write a function that takes a array and a second argument and returns the index in the array of the second argument
arr = []; 


const indexArray = (arr, arg) => {


 }

// 10. write a function that takes a number and uses a ternary to return if the number is odd or even.
//ternary is an if/else check 

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Functions: Question 10~~~~~~~~~~~~~~~~~~~~~~~~~~~')
const oddOrEven = (num) => {
  return num % 2 === 0 ? 'even' : ''   //? is true statement; : denotes the false statement

}
console.log(oddOrEven(17))


console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Functions: Question 11~~~~~~~~~~~~~~~~~~~~~~~~~~~')
// 11. Write a function that prints all  numbers from 0 – 10
const printNums = (nums) => {
  for(i = 0; i<=nums; i++){
 console.log(i)

  }
}
 printNums(10)