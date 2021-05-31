'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');

const openModel = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};


const closeModel = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnsOpenModel.forEach(el => el.addEventListener("click", openModel));

btnCloseModal.addEventListener("click", closeModel);


document.addEventListener('keydown', function (e) {
    console.log(e.key + " was pressed");

    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModel();
    }
});


