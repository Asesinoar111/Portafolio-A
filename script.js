const Contact = document.getElementById('Contact');
const ContactOpen = document.getElementById('ContactOpen');
const ContactClose = document.getElementById('ContactClose');

Contact.style.display = 'none';

ContactOpen.addEventListener('click', () => {
  Contact.style.display = 'flex';
})

ContactClose.addEventListener('click', () => {
  Contact.style.display = 'none';
})

const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
  alert('Gracias por tu mensaje!');
})

const titleName = document.getElementById('name');
let titleIndex = 0;
  titleName.addEventListener('click', () => {
  if (titleIndex === 0) {
    titleName.style.webkitTextStrokeWidth = '0px';
    titleName.style.color = 'var(--color-2)';
    titleIndex++;
  } else {
    titleName.style.webkitTextStrokeWidth = '3px';
    titleName.style.color = 'transparent';
    titleIndex--;
  }
}); 