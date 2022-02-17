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

/* let returnValue = characters.forEach((c) => {
    console.log(c.name)
})
console.log('return of forEach') 
console.log(returnValue) */  //doesn't return anything. returns undefined 



//***MAP***
//goes through each things and performs a function
//that function it performs, it collects the return of that function in 
//a new array and returns that array 
//(collects the returns of the function in a new array) *will always return an array
let returnValueMap = characters.map((c) =>{
    return c.name
})
console.log(returnValueMap)

console.log('------------------MAP 1-------------------------')

let returnValueMap2 = characters.map((c) => {
    return c.height
    
})
console.log(returnValueMap2)

console.log('---------------------MAP 2----------------------')

let returnValueMap3 = characters.map((c) => {
    return {name: c.name, height: c.height}
})
console.log(returnValueMap3)

console.log('---------------------MAP 3----------------------')

let returnValueMap4 = characters.map((c) => {

    return {name: c.name.split(' ')[0]}
})
console.log(returnValueMap4)


console.log('---------------------MAP 4----------------------')


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
//
let sum = characters.reduce((accum, c) => {
//console.log(accum)
//console.log(c.mass)

    return accum + c.mass

},0)
console.log(sum)


console.log('---------------------REDUCE 1----------------------')

let sum2 = characters.reduce((accum, charHeight) => {
return accum + charHeight.height

},0)
console.log(sum2)

console.log('---------------------REDUCE 2----------------------')

let sumOfAllEyeColors = characters.reduce((accum, c) => {
    if(c.eye_color === 'brown'){
        accum.brown +=1
        return accum
    }
    else if(c.eye_color === 'blue'){
        accum.blue +=1
        return accum
    }
    else if(c.eye_color === 'yellow'){
        accum.yellow +=1
        return accum
    }
}, {brown:0, blue:0, yellow:0})
console.log(sumOfAllEyeColors)

console.log('---------------------REDUCE 3----------------------')


let sumChars = characters.reduce((accum, c)=>{

   let numOfChars = c.name.length -1  //length - 1 is the length of the array -1 because first index starts at 0
    return accum + numOfChars
}, 0) //initialize; set to 0 

console.log(sumChars)

console.log('---------------------REDUCE 4----------------------')

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
console.log(over100)
console.log('---------------------FILTER 1----------------------')

let below200 = characters.filter((c)=>{
    return c.height < 200
})
console.log(below200)
console.log('---------------------FILTER 2----------------------')

let allMale = characters.filter((c) => {
    return c.gender === 'male'
})
console.log(allMale)

console.log('---------------------FILTER 3----------------------')

let allFemale = characters.filter((c) => {
    return c.gender === 'female'
})
console.log(allFemale)

console.log('---------------------FILTER 4----------------------')
//not changing original array which is what we want. don't want to change
//original array 

//1. Get characters with mass greater than 100
//2. Get characters with height less than 200
//3. Get all male characters
//4. Get all female characters

//***FIND*** */
//difference between find and filter is that find only finds one match
//will find only one match - the first one it comes to 
//the first match it find, it returns; or undefined if it doesn't find a match 

let firstOver100 = characters.find((c)=>{
    return c.mass >= 100
})
console.log(firstOver100)
console.log('---------------------FIND 1----------------------')

//***SORT***
characters.sort((a,b) =>{
    return a.mass - b.mass
})

console.log(characters)
console.log('---------------------SORT 1----------------------')

characters.sort((a,b)=>{  //telling it how to compare A and B by giving it 0 1 or -1    
    return a.height - b.height
})
//sorting by height from tallest to shorter 
console.log(characters)

console.log('---------------------SORT 2----------------------')

//for name   
characters.sort((a,b)=>{
     if(a.name > b.name) {
    return 1
}
    if(a.name < b.name) {
    return -1
}
return 0   //e.g. 'aab' > 'aac' alphabetically 
})

console.log(characters)
console.log('---------------------SORT 3----------------------')

characters.sort((a,b) => {
    //compare a and b; give 1 if male and -1 if female
    if(a.gender === 'male' && b.gender === 'male'){
        return 1
    }
    if(a.gender === 'male' && b.gender === 'female'){
        return -1
    }
})
console.log(characters)
console.log('---------------------SORT 4----------------------')
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//tests whether all elements in the array pass the test implemented by the function
//returns a boolean value
let blueEyes = characters.every((c) => {

    return c.eye_color === 'blue' 
})
console.log(blueEyes)

console.log('---------------------EVERY 1----------------------')

let massOver40 = characters.every((c) => {
    return c.mass > 40

})
console.log(massOver40)
console.log('---------------------EVERY 2----------------------')

let shorterThan200 = characters.every((c) => {
    return c.height < 200
})
console.log(shorterThan200)

console.log('---------------------EVERY 3----------------------')

let everyMale = characters.every((c) => {
    return c.gender === 'male'
})
console.log(everyMale)

console.log('---------------------EVERY 4----------------------')
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
// tests whether at least one element in the array passes the test implemented by the provided function
//returns true if, in the array, it find an element for which the provided function returns true; 
//otherwise, it returns false.  

let oneMale = characters.some((c)=> {

   return c.gender === 'male'
})

console.log(oneMale)

console.log('---------------------SOME 1----------------------')

let oneBlueEyes = characters.some((c)=> {
    return c.eye_color === 'blue'
 })
 
 console.log(oneBlueEyes)
 
 console.log('---------------------SOME 2----------------------')

 let tallerThan210 = characters.some((c)=> {
    return c.height > 210
 })
 
 console.log(tallerThan210)
 
 console.log('---------------------SOME 3----------------------')

 let oneMassUnder50 = characters.some((c)=> {

    return c.mass < 50
 })
 
 console.log(oneMassUnder50)
 
 console.log('---------------------SOME 4----------------------')
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?

//***Bonus***/
// come up with your own