//Carroussel
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#carroussel .carroussel-container');
  const slides    = Array.from(container.querySelectorAll('.carroussel-article'));
  const prevBtn   = container.querySelector('.chevron-left');
  const nextBtn   = container.querySelector('.chevron-right');
  let current     = 0;

  function updateSlides() {
    slides.forEach(slide => slide.classList.remove('prev','active','next'));

    const prevIndex = (current - 1 + slides.length) % slides.length;
    const nextIndex = (current + 1) % slides.length;

    slides[prevIndex].classList.add('prev');
    slides[current].classList.add('active');
    slides[nextIndex].classList.add('next');
  }

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    updateSlides();
  });

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    updateSlides();
  });

  updateSlides();
});



//exercice interactif
const start = document.querySelector('.demonstration');
    const circle = document.querySelector('.cercle');
    const message = document.getElementById('message');
    let inhaling = true;
    let textTimer;
    let animPlayer;

    function breatheText() {
      message.textContent = inhaling ? 'Inspirez !' : 'Expirez…';
      inhaling = !inhaling;
    }

    start.addEventListener('click', () => {
      animPlayer = circle.animate(
        [
          { transform: 'scale(1)'   },
          { transform: 'scale(1.7)' },
          { transform: 'scale(1)'   }
        ],
        {
          duration: 10000,
          iterations: Infinity,
          easing: 'ease-in-out'
        }
      );
      breatheText();
      textTimer = setInterval(breatheText, 5000);

      start.disabled = true;
    }, { once: true });

//journal
const form = document.querySelector('.input-container form');
const input = document.querySelector('.input');
const pendingList = document.getElementById('pendingList');

form.addEventListener('submit', e => {
  e.preventDefault();
  const entryText = input.value.trim();

   if(entryText !== '') {
    const existingEntries = Array.from(pendingList.querySelectorAll('.entries'));
    const isDuplicate = existingEntries.some(entry => entry.textContent === entryText);

    if (isDuplicate) {
        alert('Cette entrée existe déjà.');
        return;
    }

    if(existingEntries.length === 1 && existingEntries[0].classList.contains('example')) {
        existingEntries[0].textContent = entryText;
        existingEntries[0].classList.remove('example');
    } else {
        const newEntry = document.createElement('li');
        newEntry.className = 'entries';
        newEntry.textContent = entryText;
        pendingList.appendChild(newEntry);
    }

    input.value = '';
}
  });