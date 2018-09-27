// console.log("working fine");
let time = 10;
let ageStart = 0;


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


const setTimer2 = () => {
  let ageNew = setInterval(function() {
    ageNew++;

    let age = $('#ageCow').val()
    age++;
    $('#ageCow').val(age);

    if (ageStart === 25) {
      clearInterval(age);
    }
  }, 2000);
};


const setTimer = () => {
  let timer = setInterval(function() {
    time--;
    changePlay(false);
    changeHunger(false);
    changeSleep(false);

    if (time === 0) {
      clearInterval(timer);
      alert('Winner!');
    }
  }, 2000);
};

$('.startBtn').on('click', () => {
  setTimer();
  setTimer2();
});


const changePlay = (play) => {
  let mood = $('#moodBetter').val()
  if (play === true) {
    mood++
  } else {
    mood--;
  }
  $('#moodBetter').val(mood);
}

const changeHunger = (eat) => {
  let food = $('#hunger').val()
  if (eat === true) {
    food++
  } else {
    food--;
  }
  $('#hunger').val(food);
}

const changeSleep = (sleep) => {
  let dream = $('#energy').val()
  if (sleep === true) {
    dream++
  } else {
    dream--;
  }
  $('#energy').val(dream);
}


$('.play').on('click', () => {
  changePlay(true);
});

$('.feed').on('click', () => {
  changeHunger(true);
});

$('.sleep').on('click', () => {
  changeSleep(true);
});
