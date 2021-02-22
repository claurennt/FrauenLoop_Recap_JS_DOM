// different sytles of loops:

let week = ['Monday', 'Tuesday', 'Wednesday']

let people = ['Ann', 'Bert', 'Claus', 'David', 'Emma']
// for -of 
for (day of week) {
  console.log(day);
}

for (person of people) {
  console.log(person);
}
// for Each is a Method
week.forEach(day => {
  console.log(day);
})

// more generall loop: for-loop
for (let i = 100; i >= 10; i--){
  // console.log(week[i]);
  // console.log('index', i);
}

function myOldFunction () {
  return 'Hi, I am old school!'
}

const myNewFunction = () => {
  return "Hi! I'm modern!" 
}

let result = myNewFunction(10,10,30)
console.log(result);

// how can I display the numbers in the array on the page?
let myNumbers = [30, 40, 55, 90]
for (item of myNumbers) {
  // create the element
  let listItem = document.createElement('li')
  // set innerText of list item
  listItem.innerText = item
  // where do we put it?
  let list = document.getElementsByClassName('numbers')
  list[0].append(listItem)
}

let myLuckyNumbers = [3,7,11,15,21,33]

for (let index = 0; index < myLuckyNumbers.length ; index++){
  let listItem = document.createElement('li')
  listItem.innerText = myLuckyNumbers[index]
  let list = document.getElementsByClassName('numbers')
  list[0].append(listItem)
}
let user = 'Nathalie'
let action = `calculate the sum of Numbers`
// shorter way of insert more elements in the Html -document: 
let introText = document.createElement('div')
introText.innerHTML = (
  `<h1>Welcome to ${user}'s page!</h1>
  <p>Here I ${action}!</p>
  <p>give it a try!</p>`)
  document.querySelector('.container').prepend(introText)


// how can I display the sum of the numbers on the page?
const calculateSum = (anArray) => {
  let sum = 0;
  for (number of anArray) {
    sum += number
  }
  return sum
}

let resultMyNumber = calculateSum(myNumbers)

// find target for text: 
document.querySelector('.sum').innerText = ` This is the sum: ${resultMyNumber}`

