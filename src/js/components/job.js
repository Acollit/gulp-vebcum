const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const btn6 = document.getElementById('btn6')
const btn7 = document.getElementById('btn7')

let btn = document.querySelectorAll('.job__btn')

let count = 0;

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function () {
    count++;
    if (count === 2) {
      document.getElementById('send').classList.add('job__send');
      count = 0;
    }
  });
}


btn1.addEventListener('click', function () {
  btn1.classList.toggle('job__btn--orange')
});

btn2.addEventListener('click', function () {
  btn2.classList.toggle('job__btn--green')
});

btn3.addEventListener('click', function () {
  btn3.classList.toggle('job__btn--beige')
});

btn4.addEventListener('click', function () {
  btn4.classList.toggle('job__btn--pink')
});


btn5.addEventListener('click', function () {
  btn5.classList.toggle('job__btn--green')
});

btn6.addEventListener('click', function () {
  btn6.classList.toggle('job__btn--beige')
});


btn7.addEventListener('click', function () {
  btn7.classList.toggle('job__btn--orange')
});
