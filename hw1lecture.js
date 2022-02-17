let array = [1,2,3,4]

// this function doesn't return anything
// it takes an array and changes that array
// this know side effect/mutation
// change the value a variable
const swap = (array)=>{
  // take first item move to last
  let firstItem = array[0]
  let lastItem = array[array.length-1]
  array[array.length-1] = firstItem
  // take last item move it to first
  array[0] = lastItem
}

console.log('array before swap:', array)
swap(array)
console.log('array after swap:', array)

// Mutation/side effect

// Many times mutations are bad and we dont want to change the value
// of a given variable
// does not have a side
const swap1 = (arr)=>{
    // copy array
    const cloneArr = [...arr]
    swap(cloneArr)
    return cloneArr
}

let nums =[2,3,4,5]
let swapedNums = swap1(nums)
console.log('nums: ', nums)
console.log('swapedNums:', swapedNums)

console.log('------------------------')

// 2. Write a function that takes an array and returns the sum of all the numbers

// [1,2,3,4] => 10
// [1,2,3] => 6

// function decleration
// function getSum(nums){
//     console.log('here')
// }

// arrow function
const getSum = (nums) => {
  let sum = 0
  for(var i = 0; i < nums.length; i++){
    sum += nums[i]
  }
  return sum
};

let sum1 = getSum([1,2,3,4]) // 10
let sum2 =getSum([1,2,3]) // 6

// console.log(sum1)
// console.log(sum2)

// DO this again but with a forEach loop
// iterate over an array and do stuff

// forEach loop - that goes through every item in array and performs a function
// you pass it the function to perform


// (thing)=>{
    // do stuff here
// }
let sum = 0
// creating an array 'object' behind scenes
let numbers = [1,2,3,4]
console.log(numbers) //[1,2,3,4]
// expecting numbers to be an array of numbers
// this numbers parameter is scoped to the function
// overriding the variable
function getSum1(numbers){
    // console.log('here')
    // console.log(numbers)
    numbers.forEach((number)=>{
        sum += number
    })
    return sum
}

let s1 = getSum1([1,2,3,4])
let s2 = getSum1(numbers)
console.log(s1 )
console.log(s1 + s2)

console.log('------------------------')

//voting example 

const aboutPerson = (person)=>{
  let felonyAbout;
  if(person.hasFelony){
      felonyAbout= 'has felony'
  } else{
      felonyAbout= 'does not have felony'
  }
  return `${person.name} is ${person.age} years old and ${felonyAbout}`
}
console.log('----- before aboutPerson')
let aboutSally = aboutPerson(sally)
console.log(aboutSally)
console.log('----- after aboutPerson')