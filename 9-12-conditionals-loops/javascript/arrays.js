console.log('array file loaded');


An array is a list they go between square brackets
it starts from 0 to the number of objects inside the brakets

const list = ['chair', 'charger', 'books'];
const numbers = [1, 2, 3, 4];
const mixedDatatypes = [[1, 2, 3, 4], 1, 'string', {}, null, NaN];

const array = [];
const faveFoods = ['sushi', 'spaguetti', 'salad'];
console.log(faveFoods);

// Common Array methods
// 1. loop through arrays [forloop, forEach]
// 2. .Push()

const shirts = ['t-shirts', 'polo', 'v-neck'];
console.log(shirts[1]);
console.log(shirts.length, 'length');


// Practice lesson
const ghostBusters1984 = ["Venkman", "Spengler", "Stantz", "Zeddemore", "Melnitz", "Barrett", "Tully"];
console.log(ghostBusters1984[0]);
console.log(ghostBusters1984[2]);
console.log(ghostBusters1984.length, 'length');


// Looping over an array
const kitchenSink = ['dirty spoon', 'sponge', 'soap', 'water'];
// print each value of the array
for (var i = 0; i < kitchenSink.length; i++) {
  console.log('This is in my sink: ' + kitchenSink[i]);
}


Practice lesson
Print all the elements in the array
const drSeuss = ["Cat in the Hat", "Sam I am", "Grinch", "Thing One", "Thing Two", "Cindy Loo Who", "JoJo McDodd"];
for (var i = 0; i < drSeuss.length; i++) {
  console.log(drSeuss[i]);
}


Print the odd numbered index items in the array
const drSeuss = ["Cat in the Hat", "Sam I am", "Grinch", "Thing One", "Thing Two", "Cindy Loo Who", "JoJo McDodd"];
for (var i = 1; i < drSeuss.length; i+=2){
  console.log(drSeuss[i]);
}


Print the index number of every odd item(on separated lines)
const drSeuss = ["Cat in the Hat", "Sam I am", "Grinch", "Thing One", "Thing Two", "Cindy Loo Who", "JoJo McDodd"];
for (var i = 1; i < drSeuss.length; i+=2){
  console.log(drSeuss[i]);
  console.log(i);
}


--
even number items using a condition
const looneyTunesChars = ["Bugs Bunny", "Daffy Duck", "Tweety", "Sylvester", "Elmer Fudd", "Porky Pig", "Taz"];
for (let i = 0; i < looneyTunesChars.length; i++){

if (i % 2 === 0) {
  console.log(looneyTunesChars[i]);
} else {
  console.log('odd');
}
}

even numberd items, and 3 index
const looneyTunesChars = ["Bugs Bunny", "Daffy Duck", "Tweety", "Sylvester", "Elmer Fudd", "Porky Pig", "Taz"];
for (let i = 0; i < looneyTunesChars.length; i++){
  if(i % 2 === 0 || i === 3){
    console.log(looneyTunesChars[i]);
  }
}

the odd numbers
const looneyTunesChars = ["Bugs Bunny", "Daffy Duck", "Tweety", "Sylvester", "Elmer Fudd", "Porky Pig", "Taz"];
for(let i = 0; i < looneyTunesChars.length; i++){
  if(i % 2 != 0){
    console.log(looneyTunesChars[1]);
  }
}



const beatles = ['Paul', 'George', 'Ringo', 'lennon'];
console.log(beatles);

beatles.push('yoko')    <--- push it into the list
beatles.pop('yoko')     <--- push it out of the list
