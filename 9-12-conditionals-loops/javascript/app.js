console.log("loop file leaded");


// Bang Operator or not operator !
let toggle = true;
console.log('this toggle', toggle);

toggle = !toggle;
console.log('this is toggle now', toggle);


All values in JS have an implicit of 'Truthiness', they can be evaluated as true or false

All of these a falsey values:
false
0
""
NaN (not a number)
Null
Undefined

OBJECTS!!!!!!! {text}

if(boolean expression) <--- TRUE
if (0 or NaN or "" or Null) <--- FALSE

console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(NaN));


Equality Operators
==, !=, ===, !==

We want to try to stick with the ===, because we want to make sure we know what datatypes we are working with


Comparison Operators
implicity conver strings to numbers
<, >, <=, >=

12 >= "12"
=> true

"A" > "a"
=> false

"b" > "a"
=> true

"z" > "abc"
=> true

parseInt("7")
=> 7
This funtion change the string into a number

parseInt("888")
=> 888
Its now converted to number (from strings)


Logical Operators

&& (and)
checks to see if both conditions are true
if(true && 1){
}

|| (or)
checks to see if either of the conditions are true as soon as it finds a true value ir evaluates to true
if(true != false || 0 > 15){
}

if(color === 'red' || color === 'blue'){
}

Example:
const input = 'kermit'
if (input == 'kermit'){
  console.log("You're allowed in kermit");
} else {
  console.log('no soup for you!');
}

// write a conditonal that will check to see if a number is odd or even (make a habit to always use ===, it will save a lot of time looking for errors)
const number = 2
if (number % 2 === 0) {
  console.log('the number is even');
} else {
  console.log('the number is odd');
}


Write a for loop that will iterate from 50 to 20. For each iteration, if the current number is a multiple of 3, console.log the value.



loops lab
for(let i = 50; i >= 20; i--){
  if (i % 3 === 0){
  console.log(i);
  }
}

for(let i = 1; i <= 100; i++){
  console.log(i);
}


const presidents = ["Donald", "Barack", "George Jr", "Bill", "George", "Ronald", "Jimmy", "Gerald", "Richard", "Lyndon", "John", "Dwight", "Harry", "Franklin", "Herbert", "Calvin", "Warren", "Woodrow", "William", "Theodore"];
for(let i = 1; i <= presidents.length ; i+=2){
  console.log(presidents[i]);
}
