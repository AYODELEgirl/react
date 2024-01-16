function sayHello(firstName, surname){
//  let firstName = 'marvellous'
  alert(`good morning ${firstName} ${surname}`)
}
// sayHello()
sayHello('marvel', 'timi')

//  Functions that add two numbers together
function addMe(a,b){
  return a + b
}
console.log(addMe(4,6))

// Functions that multiply two numbers together
// function multiplyNumbers (x,y){
//  let a = prompt ('give me a number')
//  let b = prompt ('give me another number')
//   // return number(a) * number(b)
//   return (a*1) * (b-0)let
// }
// console.log(multiplyNumbers(2,7))

// // parse int
// let x = '90.66'
// // the parse int takes the integer

// // parse float
// let y = '40.55'
// // this will return both the integer part and tge float part together as a number

// function askYear(){
//   const year = prompt ('what year were you born?')
//   return(`you are ${new Date(). getFullYear() -year} years old`)
// }
// console.log(askYear())

// function capatalise(){
//   let theName = prompt('what is your name') . toLowerCase()
//   return alert(theName . replace (theName[0], theName[0].toUpperCase()))
// }
// capatalise()

// to return thr square of a number
function square(n){
  return alert(n*n)
  // you can either do it this way
  // return alert (n**2)
}
square(6)

// to get the square root
function sqroot(n){
  return Math.sqrt(n).toFixed(3)*1
}
console.log(sqroot(8))



