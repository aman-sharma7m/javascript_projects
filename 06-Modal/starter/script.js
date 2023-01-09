'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const last = document.querySelector('.last');
const btnsCloseModal = document.querySelectorAll('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    // document.querySelectorAll('.hidden')[i].style.display = 'block';
    if (i == 0) modal.classList.remove('hidden');
    else if (i == 1) overlay.classList.remove('hidden');
    else last.classList.remove('hidden');
  });
}

for (let j = 0; j < btnsCloseModal.length; j++) {
  btnsCloseModal[j].addEventListener('click', function () {
    // document.querySelectorAll('.hidden')[j].style.display = 'none';
    if (j == 0) modal.classList.add('hidden');
    else if (j == 1) overlay.classList.add('hidden');
    else last.classList.add('hidden');
  });
  // keyevent
  document.addEventListener('keydown', function (event) {
    if (!modal.classList.contains('hidden')) modal.classList.add('hidden');
    if (!overlay.classList.contains('hidden')) overlay.classList.add('hidden');
    if (!last.classList.contains('hidden')) last.classList.add('hidden');
  });
}
