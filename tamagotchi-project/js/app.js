console.log("working fine");
let time = 10;

$('.submit').on('click', () => {
  console.log("button is clicking");
    const $input = $('input').val();
      console.log($input);
  personNew($input);
});

const personNew = (inputVal) => {
  // const $div = $('<select1/>').addClass('nameOfPerson');
  $('contain').append('<h2>' + inputVal + '</h2>');
}


const setTimer = () => {
  let timer = setInterval(function() {
    console.log(time);
    time--;

  if(time === 0) {
    clearInterval(timer);
    }
  }, 2000);
};

setTimer();

$('.play').on('click', () => {
  let mood = $('#moodBetter').val()
  mood++;
    $('#moodBetter').val(mood);
})

$('.feed').on('click', () => {
  let food = $('#hunger').val()
  food++
    $('#hunger').val(food);
})

$('.sleep').on('click', () => {
  let dream = $('#energy').val()
  dream++
    $('#energy').val(dream);
})






// function listen(evnt, elem, func) {
//   if(elem.addEventListener) {
//     elem.addEventListener(evnt,func,false);
//   } else if (elem.attachEvent) {
//     var r = elem.attachEvent("on" + evnt, func);
//     return r;
//   }
// }
//
// function Pet(name, mood, hunger, age) {
//   this.mood = mood;
//   this.hunger = hunger;
//   this.age = age;
//   this.name = name;
//     this.indexAge = 0;
//     this.indexMood = 0;
//     this.indexHunger = 0;
//     this.element = document.getElementsByClassName(this.name);
// }
//
// Pet.prototype.setMood = function() {
//   this.element[0].className = this.name + " " + this.mood + " " + this.hunger + " " + this.age + " " + this.health;
// }
//
// Pet.prototype.life = function () {
//   var head = document.getElementsByClassName("cow-head")[0];
//   var body = document.getElementsByClassName("cow-body")[0];
//   var objectName = this;
//
// function gettingSad() {
//     objectName.indexMood++;
//     objectName.mood = configs.moods[objectName.indexMood];
//     objectName.setMood();
//
//     if(objectName.element[0].className.indexOf('happy') > -1) {
//      };
//
//      if (objectName.element[0].className.indexOf("sad") > -1 ) {
//      };
//
//      if (objectName.element[0].className.indexOf("dead") == -1 ) {
//            setTimeout(gettingSad, 2);
//     };
//   };
//
// function gettingHungry() {
//     objectName.indexHunger++;
//     objectName.hunger = configs.feedTypes[objectName.indexHunger];
//     objectName.setMood();
//
//     if (objectName.element[0].className.indexOf("dead") == -1 ) {
//         setTimeout(gettingHungry, 30000);
//     };
// };
//
// function play() {
//     if (objectName.element[0].className.indexOf("dead") == -1 ) {
//         objectName.indexMood = 0;
//         objectName.mood = configs.moods[objectName.indexMood];
//         objectName.setMood();
//     };
// };
//
// function feed() {
//     if (objectName.element[0].className.indexOf("dead") == -1) {
//       objectName.indexHunger = 0;
//       objectName.hunger = configs.feedTypes[objectName.indexHunger];
//       objectName.setMood();
//   };
// };
//       setTimeout(gettingSad, 10);
//         setTimeout(gettingHungry, 2);
//
//     listen('click', document.getElementsById('play'), play);
//       listen('click', document.getElementsById('feed'), feed);
//         listen('click', document.getElementsById('sleep'), sleep);
//   };
//
// var configs = {
// 	moods: ["happy", "sad", "dead"],
// 	feedTypes: ["full", "empty", "dead"],
// 	ages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
// }
//
// var cow = new Pet("cow", configs.moods[0], configs.feedTypes[0], configs.ages[0]);
//
//   cow.setMood();
//     cow.life();
