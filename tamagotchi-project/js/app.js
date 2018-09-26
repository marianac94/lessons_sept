// console.log("working fine");
let time = 10;
let play = 10;
let feed = 10;
let sleep = 10;


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
    time--;

    let mood = $('#moodBetter').val()
    mood--;
    $('#moodBetter').val(mood);

          let food = $('#hunger').val()
          food--;
          $('#hunger').val(food);

                let dream = $('#energy').val()
                dream--;
                $('#energy').val(dream);

    if (time === 0) {
      clearInterval(timer);
    }
  }, 2000);
};

$('.startBtn').on('click', () => {
  setTimer();
})


$('.play').on('click', () => {
  let mood = $('#moodBetter').val()
  mood++;
  $('#moodBetter').val(mood);
})

$('.feed').on('click', () => {
  let food = $('#hunger').val()
  food++;
  $('#hunger').val(food);
})

$('.sleep').on('click', () => {
  let dream = $('#energy').val()
  dream++;
  $('#energy').val(dream);
})
