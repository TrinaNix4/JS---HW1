const characters = [
  {
      name: 'Luke Skywalker',
      height: 172,
      mass: 77,
      eye_color: 'blue',
      gender: 'male',
  },
  {
      name: 'Darth Vader',
      height: 202,
      mass: 136,
      eye_color: 'yellow',
      gender: 'male',
  },
  {
      name: 'Leia Organa',
      height: 150,
      mass: 49,
      eye_color: 'brown',
      gender: 'female',
  },
  {
      name: 'Anakin Skywalker',
      height: 188,
      mass: 84,
      eye_color: 'blue',
      gender: 'male',
  },
];
//console.log(characters[1].mass) //grabbing darth vader and .mass gives the mass value in the object 
//these are all methods on arrays
//all of these methods pass a function to
//going to be different in what they return
//they all (except sort) do not mutate the array that called it; leave the original array that called it unchanged

//****FOR EACH*** */
//goes through each things and performs function
//returns undefined 

let returnValue = characters.forEach((c) => {
    console.log(c.name)
})
console.log('return of forEach') 
console.log(returnValue) //doesn't return anything. returns undefined 



//***MAP***
//goes through each things and performs a function
//that function it performs, it collects the return of that function in 
//a new array and returns that array 
//(collects the returns of the function in a new array) *will always return an array
let returnValueMap = characters.map((c) =>{
    return c.name
})
console.log('return of map')
console.log(returnValueMap)

//1. Get array of all names
//2. Get array of all heights
//3. Get array of objects with just name and height properties
//4. Get array of all first names

//***REDUCE***
//GOES THROUGH EACH THINGS AND PERFORMS A FUNCTION
//THIS FUNCTION HAS TWO PARAMS, THE RETURN VALUE OF THE PREVIOUS 
//FUNCTION, AND THE CURRENT ITEM 
//ONCE THIS IS DONE, IT RETURNS THE FINAL RETURN OF FUNCTION (ACCUMULATOR
 //CAUSE RETURNING A VALUE)
let nums = [2, 3, 4, 5, 6]
let sum = nums.reduce((accum, num) =>{
    console.log('accum', accum)
    console.log('num' , num)
return accum + num

},0)
console.log(sum)




//1. Get total mass of all characters
//2. Get total height of all characters
//3. Get total number of characters by eye color
//4. Get total number of characters in all the character names

//***FILTER***
//if we want to remove items
//go through each things and perform a function. 
//if that function returns 'true' it pushes the item in the new array
//if it returns 'false' it doesn't; can return multiple people 


let over100 = characters.filter((c)=>{
return c.mass >= 100 //if true, its going to keep that thing in the new array

})
console.log('return of filter')
console.log(over100)

//not changing original array which is what we want. don't want to change
//original array 

//1. Get characters with mass greater than 100
//2. Get characters with height less than 200
//3. Get all male characters
//4. Get all female characters

//***FIND*** */
//difference between find and filter is that find only finds one match
//will find only one match - the first one it comes to 
//the first match it find, it retuns; or undefined if it doesn't find a match 

let firstOver100 = characters.find((c)=>{
    return c.mass >= 100
})
console.log('return of find')
console.log(firstOver100)


//***SORT***

characters.sort((a,b)=>{  //telling it how to compare A and B by giving it 0 1 or -1
return a.height - b.height
})
console.log('return of sort') //sorting by height from tallest to shorter 
console.log(characters)

//for name   

if (a.name > b.name) {
    return -1
}
if(a.name < b.name) {
    return 1
}return 0   //e.g. 'aab' > 'aac' alphabetically 

//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?

//***Bonus***/
// come up with your own