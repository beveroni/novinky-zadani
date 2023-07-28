// a.
const bodyElm = document.querySelector('body');
bodyElm.style.backgroundColor = '#e9e9e9';

// b.
const newsElm = document.querySelector('.news');
newsElm.style.backgroundColor = 'white';
newsElm.style.maxWidth = '60rem';

// c.
const headingElm = document.querySelector('h1');
headingElm.classList.add('news__title');
headingElm.textContent = 'Aktuální novinky';

// d.
const firstPostElm = document.getElementById('zprava1');
firstPostElm.classList.add('post--main');

// e.
const lastPostImgElm = document.querySelector('#zprava3 img');
lastPostImgElm.src = 'img/zprava3-novy.jpg';
