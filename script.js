'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
// const btnsOpenModel = document.querySelector('.show-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');

// for (let i = 0; i < btnsOpenModel.length; i++) {
//     btnsOpenModel[i].addEventListener('click', function (e) {
//         console.log(e.target);
//         modal.classList.remove('hidden');
//         overlay.classList.remove('hidden');
//     });
// }

// btnCloseModel.addEventListener('click', function (e) {
//     console.log(e.target);
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });


// overlay.addEventListener('click', function (e) {
//     console.log(e.target);
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });

const closeModal = function (e) {
    console.log(e.target);
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnCloseModel.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

const openModal = function (e) {
    console.log(e.target);
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModel.length; i++) {
    btnsOpenModel[i].addEventListener('click', openModal);
}

document.addEventListener('keydown', function (e) {
    console.log(e.key); // Escape
    // console.log(e.code); // Escape

    if ((e.key === 'Escape') && (!modal.classList.contains('hidden'))) {
        closeModal(e);
    }
})

