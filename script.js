// different styles of loops:

let week = ['Monday', 'Tuesday', 'Wednesday']

let people = ['Ann', 'Bert', 'Claus', 'David', 'Emma']
// for -of is a loop we can use only on arrays. 
for (day of week) {
  console.log(day);
}

for (person of people) {
  console.log(person);
}
// for Each is a Method, which we can use on arrays.
week.forEach(day => {
  console.log(day);
})

// more generall loop: for-loop. This loop can be used to loop through Arrays, but also to repeat any code multiple times!
for (let i = 100; i >= 10; i--){
  // console.log('index', i);
}

// Two styles of functions: For now, you can use the one you like most!
function myOldFunction () {
  return 'Hi, I am old school!'
}

const myNewFunction = () => {
  return "Hi! I'm modern!" 
}
// Both functions return something, i.e. they have a output. If we want to use the output of the function, we store it in a variable when we call the function:
let result = myNewFunction(10,10,30)
console.log(result);

/** Challenges we did in class:*/
// how can I display the numbers in the array on the page?
let myNumbers = [30, 40, 55, 90]
for (item of myNumbers) {
  // create the element
  let listItem = document.createElement('li')
  // set innerText of list item
  listItem.innerText = item
  // where do we put it?
  let list = document.getElementsByClassName('myNumbers')
  list[0].append(listItem)
}
// here we do the same thig, display numbers, but use a different loop, just because we can!
let myLuckyNumbers = [3,7,11,15,21,33]

for (let index = 0; index < myLuckyNumbers.length ; index++){
  let listItem = document.createElement('li')
  listItem.innerText = myLuckyNumbers[index]
  let list = document.getElementsByClassName('luckyNumbers')
  list[0].append(listItem)
}

/** shorter way of insert more elements in the Html -document: */
// Here I declare 2 variables and mix then into the text that is created in  line 64:

let user = 'Nathalie'
let action = `calculate the sum of Numbers`

let introText = document.createElement('div')
introText.innerHTML = (
  `<h1>Welcome to ${user}'s page!</h1>
  <p>Here I ${action}!</p>
  <p>give it a try!</p>`)
  document.querySelector('.container').prepend(introText)


// how can I display the sum of the numbers on the page?
// First calculate the sum:
const calculateSum = (anArray) => {
  let sum = 0;
  for (number of anArray) {
    sum += number
    console.log("sum in the loop:", sum);
  }
  // find target for text: 
  document.querySelector('.sumDisplay').innerText = ` This is the sum: ${sum}`
}

let button = document.querySelector('#sum')
button.addEventListener('click', () => calculateSum(myNumbers))

// Styling:
const changeStyleOnClick = () => {
  let page = document.querySelector('.container')
  page.classList.toggle('darkMode')
}
let styleButton = document.querySelector('#changeStyle')
styleButton.addEventListener('click', changeStyleOnClick)