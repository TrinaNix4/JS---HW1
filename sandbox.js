// 2. Write a function that takes an array and returns the sum of all the numbers

//[1,2,3,4] => 10

const getSum = (nums) => {
  let sum = 0; 
  for(var i=0; i< nums.length; i++){
    console.log(nums[i]) //grab each index
    sum += nums[i]
  }
  return sum
}; 

let sum1 = getSum([1,2,3,4,5])
let sum2 = getSum([1,2,3])

console.log(sum1)
console.log(sum2)
console.log('---------------------')
//forEach to iterate over an array and DO STUFF
//forEach loops goes through every item in an array and performs a function
//you pass it to the function to perform 
let sum = 0
let numbers = [1,2,3,4] //this only works for a specific array, wrap it in function
//to work for any array

//the numbers in this function is local scope
//overrides the variable; change it to nums 
function getSum1(numbers){
  numbers.forEach((number)=>{
    sum += number //same as saying sum = sum + number 
  } )
  console.log(sum)
}
getSum1([9, 10, 11])
getSum1([numbers])


//arr.forEach((number)=>{ // can call the variable anything (num)

//console.log(number)
//}) //array with forEach method 


GET FROM SLACKK



