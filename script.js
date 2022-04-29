const btns = document.querySelectorAll('.btns');
const modals = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtns = document.querySelectorAll('.close-modal');
const showModalBtns = document.querySelectorAll('.show-modal');

showModalBtns.forEach((btn, idx) => btn.addEventListener('click', function() {
    console.log(modals[idx]);
    console.log(btn);
    modals[idx].classList.toggle('hidden')
  }))

closeModalBtns.forEach((x,i) => x.addEventListener('click', function() {
    console.log('Hey, listen!');
    modals[i].classList.toggle('hidden');
}))

// function arrAdder(arr) {
//     console.log(arr);
//   }

//   arrAdder([['J','L','L','M']
//   ,['u','i','i','a']
//   ,['s','v','f','n']
//   ,['t','e','e','']])