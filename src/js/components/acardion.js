document.addEventListener('DOMContentLoaded', () => {
  const item = document.querySelectorAll(".questions__item")
  item.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const btn = self.querySelector(".questions__svg")
      const text = self.querySelector(".questions__text")
      const title = self.querySelector(".questions__subtitle")
      const box = self.querySelector('.questions__box')
      text.classList.toggle('questions__text--active')
      self.classList.toggle('questions__item--active')
      box.classList.toggle('questions__box--active')
      btn.classList.toggle('questions__svg--active')
      title.classList.toggle('questions__subtitle--active')

      if (text.classList.contains('questions__text--active')) {
        text.style.maxHeight = text.scrollHeight + 'px';
      } else {
        text.style.maxHeight = null;
      }

    });
  });



});

let select = document.getElementById('select');
select.onchange = function () {
  select.style.color = '#222';
}
