 let students = 'mubarak marvellous kehinde ekene ayodele franca'

 const arrOfStds = students.split(' ')
 //remove last member from an array
 arrOfStds.pop()
 arrOfStds.pop()

 arrOfStds.shift()
 //add to the start of an array
 arrOfStds.unshift('Mubarak')
 //add to the end of an array arrOfStds.push('Ayodele')

 let otherstudent1 = ['jonah', 'dami']
 let otherstudent2 = ['benedicta', 'amin']

 arrOfStds.push(...otherstudent1)

 arrOfStds.splice(2,1)
 arrOfStds.splice(4,0,...otherstudent2)
 arrOfStds.splice(arrOfStds.indexOf('amin')+1,0,'ayere','timilehin')

// console.log(arrOfStds)
// dog age calculator
let dogAge = prompt('what is your dog name')
let total = (dogAge-2) * 4 + 21
alert(`if your dog were to be human,your dog is ${total} years old`)