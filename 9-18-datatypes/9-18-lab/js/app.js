console.log('lab works just fine!');

// 1. Given, the following object, log the third element from the array
const fun = {
    asdf: ["afd", "matt", 'sweet']
}

    console.log(fun.asdf[2]);

// Given, the following object, log the elbow property
const body = {
    arm: {
        elbow: 'pointy'
    }
};
    console.log(body.arm.elbow);

// Given, the following object, call the jump method
const person = {
    jump(){
        console.log('fly!');
    }
};
    person.jump()

// Create a data structure such that the following code logs the value "blue"
const myList = [
  {eyeColor : "blue"}
]
    console.log(myList[0].eyeColor);

// Create a data structure such that the following code logs the value "buy supplies"
const myArray = [
    { color1: 'Red'},
    {color2: 'Green'},
    ['blue', 'yellow', 'purple', 'shazad', 'buy supplies']
]
    console.log(myArray[2][4]);

// Call the function in the given code:
const awesome = [
    {
        asdf:'true'
    },
    3456.245,
    ()=>{
        console.log('fun');
    },
    "buddy"
];

console.log(awesome[2]);

// Loops over the following array, and print its values:
const refrigerator = {
    fruits: ['apple', 'pear', 'banana']
}
  for(let i = 0; i < refrigerator.fruits.length; i++) {
    console.log(refrigerator.fruits[i]);
}

// Use two loops to loop over each array in the given "container" array
const container = [
    [1,5,7],
    ['bear', 'dog', 'cat'],
    [true, false, true]
];
  for(let i = 0; i < container.length; i++) {
    for(let x = 0; x < container[i].length; x++) {
    console.log(container[i][x]);
  }
}

// Create a data structure such that the following logs 4
const createCar = () => {
  return {tires: 4}
}

    console.log(createCar().tires);

// Create a data structure such that the following logs pears
const generateShoppingList = () => {
  return ['apple', 'orange', 'pineapple', 'pears']
}
    console.log(generateShoppingList()[3]);

// Create a data structure such that the following logs 20lbs
const createRobot = () => {
  return { stats: {weight: "20lbs"} }
}
    console.log(createRobot().stats.weight);

// Call the drive method
const generateCar = ()=>{
    return {
        drive(){
            console.log("Vroom");
        }
    }
}
    console.log(generateCar().drive);

// Create a data structure such that the following executes without errors:
// const createFunction = () => {
//   return
// }
//     createFunction()();

// Log the message attribute
const account = {
    tweet(){
        return {
            message: "fun"
        }
    }
}
    console.log(account.tweet().message);

// Log the second element in the array
    const me = {
        foo(){
            return {
                array: [2.5, 7, true]
            }
        }
    }

    console.log(me.foo().array[1]);

// Use the instruments object to print the following.

// "telecastor"
// "santa cruz"
// "washburn"
// "weber"

const instruments = {
  banjo: ["1920 gibson", "deering", "washburn"],
  guitar: {
    acoustic: ["martin", "taylor", "santa cruz", "gibson"],
    electric: ["fender Strat", "telecastor", "PRS", "languedoc"],
    nylon: ["baldwin", "cordoba"]
  },
  mandolin: ["eastman", "weber", "collings"]
}

// Using the instruments object loop through all the electric guitars and print them to the console.
console.log(instruments.electric[]);

// Add a property to the instruments object, that includes a list of your favourite singers.
