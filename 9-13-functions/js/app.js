console.log('functions work!');

// if(BOOLEAN EXPRESSION){
//   // this block runs if the expression is true
// }
//
// for(let i = 0; i < 10; i++){
//   // blocks to be repeated until conditions is meant
// }
//
//
// //Functions, act like variables and store a code block for later use
//
//
// // arrow functions (new with es6)
// const func = () => {
//   // code executed later
// }


// this is defining a function
// const printBoo = () => {
//   // this block of code will run when the funtion is excecuted or invoked
//   console.log('boo');
// }
//
// // this is excecuting a function, invonking or calling a function
// printBoo();


// Activity
// const printNum = (num1, num2) => {
//   console.log(num1 + num2);
// }
//
// printNum(10, 10);


// const printTriangle = () => {
//   for(let i = 1; i <= 5; i++){
//     console.log('#' .repeat(i))
//   }
// }
//
// printTriangle();


// Functions as general rule of thumb should do one thing and do it really well
//
// // Input is called a parameter (is acting as a variable)
// const checkInputLenght = (input) => {
//   // wew expecting input to be a string
//   if(input.length > 10){
//     console.log('input is greater than ten');
//   } else {
//     console.log('input is too small');
//   }
// }
// //calling the function with an argument
// checkInputLenght('anything we want we can put here');


// const sayName = (name) => {
//   console.log(`Hello! ${name}`);
// }
//
// sayName('Jerry');
// sayName('George');
// sayName('njdfnjvk');

// When start repeating yourself its an indication that you can use a function
// repeating yourself with a minor differences
// console.log(`Hello! Jerry`);



// 1. Activity
// const printParameter = (input) => {
//   console.log(input);
// }
//
// printParameter('hi');
//
//
// 2. Extra
// const minusOne = (num) => {
//   console.log(`${num}` -1);
// }
//
// minusOne(10);
// minusOne(100);
// minusOne(Infinity);
//
//
// 3. Extra
// const getLastElement = (someArray) => {
//   console.log(someArray[someArray.length - 1]);
// }
//
// // invonking the function
// getLastElement(['1', '2', '3', '4', '5']);   //<-- print 5
// getLastElement(['a', 'b', 'c']);   //<--- print 'c'
// getLastElement([[1, 2, 3], [4, 5, 6]]);     //<-- print [4, 5, 6]



// const multiply = (num1, num2) => {
//   console.log(num1 * num2);
// }
// multiply(2, 8);
// console.log(multiply(4, 5));


// to give a function a value
// we must return that value from the function
// remember console.log is for you to see what is going, it doesn't affect your code

// const divide = (a, b) => {
//   return a / b;
// }
//
// console.log(divide(9, 3), 'this is output');
//
//
// const divisionResult = divide(9, 3);
// console.log(divisionResult);



// 1. Activity
// const calculateArea = (width, length) => {
//   console.log(width * length);
// }
//
// calculateArea(10, 5);


// 2. Activity and Research
// const threeP = (p1, p2, p3) => {
//   return (p1 + p2 + p3).toString();
// }
//
// console.log(threeP(4, 3, 2));


// const sumNumbersToString = (num1, num2, num3) => {
//   const sum = num1 + num2 + num3;
//     return sum.toString();
// }
//
// console.log(sumNumbersToString(4, 4, 4));


// Palindrome
// We want to write a function to see if you a string is Palindrome

// const isPalindrome = (word) => {
//   console.log(word.split("").reverse().join(""));
//   const reversedWord = (word.split("").reverse().join(""));
//     if(word === reversedWord){
//       return true
//     } else {
//       return false
//     }
// }

// isPalindrome('taco');
// console.log(isPalindrome('mom'));
// console.log(isPalindrome('madam'))
