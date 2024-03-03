function calculatePrice() {
  // Get the selected values
  var day = document.getElementById('day').value;
  var lvl = document.getElementById('lvl').value;
  var time = document.getElementById('time').value;

  // Calculate the new price
  var newPrice = 32000; // This is the base price
  if (day === '5') {
    newPrice *= (1 + 0.25); // Add 5.000 if 5 days are selected
  } else if (day === '6') {
    newPrice *= (1 + 0.50); // Add 10.000 if 6 days are selected
  }


  if (lvl === 'средний') {
    newPrice *= (1 + 0.25); // Add 5.000 if 5 days are selected
  } else if (lvl === 'продвинутый') {
    newPrice *= (1 + 0.50); // Add 10.000 if 6 days are selected
  }

  if (time === 'месяц') {
    newPrice *= (1 + 3); // Add 5.000 if 5 days are selected
  } else if (time === 'год') {
    newPrice *= (1 + 51); // Add 10.000 if 6 days are selected
  }

  // Update the price element
  var priceElement = document.querySelector('.form__price');
  priceElement.innerHTML = Math.trunc(newPrice);
  var spanElement = document.createElement('span');
  spanElement.className = 'form__price--mini';
  spanElement.innerText = ' ₽';
  priceElement.appendChild(spanElement);
}


document.getElementById('day').addEventListener('change', calculatePrice);
document.getElementById('lvl').addEventListener('change', calculatePrice);
document.getElementById('time').addEventListener('change', calculatePrice);
