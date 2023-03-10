/*1. Write a JavaScript program using the Math object and methods to find the area of a triangle where lengths of the three of its sides are 12,18,21.*/

// variables for the sides of the triangle
let a = 12;
let b = 18;
let c = 21;
//this is the semipremiter for the triangle
let comb = (a + b + c) / 2;
// To calcualte the area of the triangle
console.log(Math.sqrt(comb * (comb - a) * (comb - b) * (comb - c)));
/*2. Write a JavaScript program using the Date Object and methods to display the current day and time in the following format.
For example: Today is : Tuesday. Current time is : 10 PM : 30 : 38*/
// To get current date and time
const date = new Date();
// the day of the week
const week = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
// How to get the current day of the week
const today = week[date.getDay()];
// how to get the current hour of the time
let hr = date.getHours();
const time = hr >= 12 ? 'PM' : 'AM';
hr = hr % 12;
hr = hr ? hr : 12;
// how to get the current minute and seconds of the time
const min = date.getMinutes().toString().padStart(2, '0');
const sec = date.getSeconds().toString().padStart(2, '0');
// output for the now.date
console.log(
  `Today is: ${today}. Current time is: ${hr} ${time} : ${min} : ${sec}`
);

/*3. Write a HTML + JavaScript web application using an HTML form and JS to convert temperatures TO and FROM Celsius, Fahrenheit and output the result in the HTML page.*/
// Convert fahrenheit to celsius
function FahrenheitConvr(temp) {
  temp = parseFloat(temp);
  // math for convertion
  document.getElementById('CelOutput').innerHTML = (temp - 32) * 1.8;
}
// conver celsius to fehrenheit
function CelsiusConvr(temp) {
  temp = parseFloat(temp);
  // math for convertion
  document.getElementById('FahrenOutput').innerHTML = temp * 1.8 + 32;
}

/*4. Complete the square sum function so that it squares each number passed into it and then sums the results together.
For example, for [1, 2, 2] it should return 9
 Format:*/
//  Find the sum of a square
function squareSum(array) {
  // keep tack of total
  let sum = 0;
  // for loop squares the numbers
  for (let i = 0; i < array.length; i++) {
    sum += Math.pow(array[i], 2);
  }
  return sum;
}
// numbers from square
const array = [1, 2, 2];
console.log(squareSum(array));
