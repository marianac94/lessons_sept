console.log('objects work just fine!');

// Objects in Javascript
// All objects have properties and methods

// properties are values -> 2 eyes
// methods are actions/functions -> talk, run (to do something console.log(); the action)

// Objects are what call key/values pairs

// Object literal: (type of object)
// const skaterboard = {
//   wheels : 4,
//   gripColor: 'Black',
//   company: 'Toy Machine',
//
//   kickflip() {
//     console.log('kowabunga');
//   }
// }

// to access a propertie you put the name of the name of the object "skaterboard" and the key of the object "company" on the console and you'll get:
// ---> skaterboard.company (then hit enter)
// ---> answer: "Toy Machine"
// skateboard.wheels // --> 4

// In objects we don't have to write arrow functions anymore


// Example:
// const person = {
//   eyes: 2,
//   head: 'brain',
//   mouth: 1,
//   name: 'mariana',
//
//   breath() {
//     console.log('yey');
//   }
// }


// const car = {
//   owner: 'Bill',
//   accelerate(){
//     console.log('goo');
//   }
// };
//
//   car.names = 'audi';
//   car.age = 100;
//   car.colors = ['red', 'blue', 'green'];
//
//   // to edit a property/key
//   car.owner = 'Jay Z';
//
// // one way to access values in objects
//   console.log('car');
//
// // one other way to access values in objects (braket notation)
// const dog = {
//   name: 'Franklin',
//   goodBoy: true,
//
//   bark() {
//     console.log('woof!');
//   }
// };
//     dog.name // --> 'Franklin'
//     dog['name'] // --> 'Franklin'
//
// // to change the property of the key object using brakets
// dog['goodBoy'] = false;
// dog.name = 'Franky Boy'
//
// console.log(dog);


// Example of the property: cat with different keys that describle him.

// const cat = {
//   name: 'fluffy',
//   age: 3,
//   goodpet: true,
//   color: 'black',
//
//   meow() {
//     console.log('cat noice');
//   }
// }

// cat['meow']();

// cat.name = 'lupito'; // -- I redifined the name of the cat from fluffy to lupito
// cat.age = 68; // -- Its changed from 3 to 68 years

// delete cat.age // -- it deletes the object completely

// console.log(cat); // -- for the complete info of the object 'cat'




// Lab

// 1. Me
// const me = {
//   name: 'Mariana',
//   age: 24,
//   email: 'marianac94@hotmail.com'
// };

// 1. console.log(me);
// 2. console.log(me.name);
// 3. me['age'] = 1000;
// 4. console.log(me);
// 5. me.place_of_recidence = 'Monterrey, Mx';
// 6. console.log(me);

// 2. Slimer
// const monster = {
//    name: "Slimer",
//    color: "greenish",
//    type: "plasm or ghost or something"
// }

// console.log(monster.name);
// monster.type = 'creature'; console.log(monster.type);
// monster.age = 6; console.log(monster.age);

// console.log('Hi, my name is ' + monster.name + ' my type is ' + monster.type + ' and of course my age is ' + monster.age + ' and yeah im also kinda ' + monster.color);


// 3. Ogres
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const adventurer = {
  name: 'Mario',
  hitpoints: 10,
  damage: 1,
  attack () {
    console.log('Mario just attacked Ogre');
  }
};

const ogre = {
  name: 'Shrek',
  hitpoints: 10,
  damage: getRandomInt(1, 3),
  attack () {
    console.log('Ogre just attacked Mario');
  }
}
const ogreFight = () => {

  for ( let i = ogre.hitpoints; i > 0; i-- ) {

  if (ogre.hitpoints < 1 && ogre.hitpoints > -2 ) {
      console.log(adventurer.name + ' wins! ');
        return;

  } else if (adventurer.hitpoints < 1 && adventurer.hitpoints > -2){
      console.log(ogre.name + ' wins! ');
        return;
}
      ogre.hitpoints = ogre.hitpoints - adventurer.damage;
      console.log(adventurer.name + ' just attacked ' + ogre.hitpoints);

      adventurer.hitpoints = adventurer.hitpoints - getRandomInt(1, 3);
      console.log(ogre.name + ' just attacked ' + adventurer.hitpoints);
    }
}

ogreFight();
