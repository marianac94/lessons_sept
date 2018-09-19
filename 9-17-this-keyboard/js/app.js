console.log('this objects works!');

// const garcia = {
//       albums: ['shady grove', 'run for the roses', 'hooteroll', 'Garcia', 'Reflections'],
//       instruments: ['Vocals', 'pedal steel', 'electric guitar', 'acoustic guitar', 'banjo'],
//       alive: false,
//       quote: 'Im shopping around for something to do that no one will like',
//       friends: [{
//         name: 'Bobby weir',
//         hobby: 'guitar'
//       },
//       {
//         name: 'Bob Dylan',
//         hobby: 'writing songs'
//       },
//       {
//         name: 'Allen Ginsberg',
//         hobby: 'writing poems'
//       },
//       {
//         name: 'Phil Lesh',
//         hobby: 'Playing dope bass lines'
//       }]
//   }
//
// console.log(garcia.albums[2]);
//   console.log(garcia.friends[0].name);
//     console.log(garcia.friends[2].hobby);
//       console.log(garcia.instruments[4]);
//
// garcia.alive = true;
//   console.log(garcia.alive);
//
// garcia.quote = 'Everybody just be nice to each other'
//   console.log(garcia.quote);
//
//
//
// const foo = {
//   value: 12,
//     getValue() {
//
//     console.log(this);
//       return this.value;
//   }
// }

// the keyword this refers to the object that is invonking the method
// console.log(foo.getValue());



// Create an object called person that has a property called name and a method called getName that when called returns the value of the name property.
// const person = {
//   name: 'Mariana',
//     getName() {
//       return this.name;
//   }
// }
    // console.log(person.getName());
    // console.log(this);


// function burrito() {
//   console.log(this, ' inside burrito');
// }
//     burrito();
//
// const taco = () => {
//   console.log(this, 'inside taco');
// }
//     taco();
//
//
//
// const game = {
//   timer: 10,
//   start() {
//     const gameTimer = setInterval( () => {
//       console.log('hi', this)
//
//       this.timer -= 1; // short hand notation
//
// if (this.timer === 0) {
//   console.log('gameover');
//   clearInterval(gameTimer);
// }
//
//       console.log(this.timer);
//       // this.timer = this.timer - 1 (this way is also fine to write it)
//     }, 1000);
//   }
// };
//
// game.start();
//
//
//
// const book = {
//   title: 'Lisbon Poets',
//   author: 'cacio',
//   year: 2000
// }

// --> one different way
// for (let prop in book) {
//   console.log(prop);
//   console.log(book[prop]);
// }
// objects we use for ... in

// --> one different way
// console.log(Object.keys(book));
// objects.key()

// --> one different way
// for (let i = 0; i < Object.keys(book).length; i++) {
//   console.log(book[Object.keys(book)[i]]);
// }


// Problem #1
// const movie = {
//   title: "Eraserhead",
//   director: "David Lynch",
//   year: 1978
// }
//
// for (let prop in movie) {
//   console.log(prop, ' key');
//   console.log(movie[prop], ' value');
// }


// Problem #2
// * Create an empty object. Leverage the fact that Keys are unique in an object. Loop over the movies array and add the movie titles as keys in the object. This will consequently omit the duplicate movie. At the same time, give each a value of **0** in the object.
// * The result should be this: `{"L'Avventura": 0, "Eraserhead": 0, "Dayereh": 0}`
// * Use **Object.keys** loop to print all the values of the movie object.

// const movies = [
//     { title: "L'Avventura", director: "Michelangelo Antonioni", year: 1960 },
//     { title: "Eraserhead", director: "David Lynch", year: 1978 },
//     { title: "Dayereh", director: "Jafar Panahi", year: 2000 },
//     { title: "Dayereh", director: "Jafar Panahi", year: 2000 }
// ]
//
// const moviesObj = {};
// for(let i = 0; i < movies.length; i++) {
//   // key first
//   const keyInObject = Object.keys(moviesObj)[i];
//   // value out of the object
//   console.log(moviesObj[keyInObject]);
// // print out the title
// }
//
// for(let prop in moviesObj) {
//   console.log(moviesObj[prop]);
// }


// Solar System Lab
const solarSystem = [
	{ name: "Mercury", ringSystem: false, moons: [] },
	{ name: "Venus", ringSystem: false, moons: [] },
	{ name: "Earth", ringSystem: false, moons: ["The Moon"] },
	{ name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
	{ name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
	{ name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
	{ name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
	{ name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }
];

// 0, 1, 2.
console.log(solarSystem[0].ringSystem);
  console.log(solarSystem[4]);
    console.log(solarSystem[7].moons[1]);

// 3.
solarSystem[1].moons.push("Endor");
  console.log(solarSystem[1]);

// 4.
  const Pluto = {
    name: 'Pluto',
    ringSystem: false,
    moons: ["Charon"]
  }
  solarSystem.push(Pluto);
    console.log(solarSystem[8]);

// 5.
const diameter = {
  radius: 3959,
  area: function() {
    return Math.PI * this.radius * this.radius;
  }
};

solarSystem[2].Diameter = diameter.area();
  console.log(solarSystem[2]);

// 6.
solarSystem[0].ringSystem = true;
console.log(solarSystem[0]);

// 7.
solarSystem[6].moons[3] = "Oberon";
console.log(solarSystem[6]);

// 8.
console.log(solarSystem);





// for(let i = 0; i < solarSystem.length; i++) {
//   if
// }








// Function Objects
// function Book(pages, author, type) {
//   this.pages = pages;
//   this.author = author;
//   this.type = type;
//   this.getDetails = function() {
//     return this.type + " writen by " + this.author + " is " + this.pages + " pages long.";
//   }
// };
//
// let book = new Book(200, 'L.S. Lewis', 'hardback');
// let book2 = new Book(500, 'J.K. Rollin', 'softback');
//   console.log(book.getDetails());
//     console.log(book2.getDetails());
// //
// //
// // //
// const circle = {
//   radius: 25,
//   area: function() {
//     return Math.PI * this.radius * this.radius;
//   }
// };
// //
// console.log(circle.area());
// //
// //
// //
// function Shoe(size, color, type, gender) {
//   this.size = size;
//   this.color = color;
//   this.type = type;
//   this.gender = gender;
//   this.getDetails = function() {
//     return 'The shoe is ' + this.size + ', color ' + this.color + ' and the type ' + this.type +
//     ' and for ' + this.gender ;
//   }
// };
//
// let shoe = new Shoe(6.5, 'black', 'high heels', 'female');
// console.log(shoe.getDetails());
