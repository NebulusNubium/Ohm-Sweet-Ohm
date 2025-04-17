//Carroussel

//exercice interactif
const demontration = document.getElementsByClassName('demonstration')
const cercle = document.querySelector('.cercle')

demonstration.addEventListener('click', function({
  
}))

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