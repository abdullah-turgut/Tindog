// Remember to import the data and Dog class!
import dogs from './data.js';
import { Dog } from './data.js';

const btnDislike = document.querySelector('#btn-dislike');
const btnLike = document.querySelector('#btn-like');
const profile = document.querySelector('.profile');

const dogsArray = dogs.map((dog) => new Dog(dog));
console.log(dogsArray);

function renderHtml(index) {
  profile.innerHTML = dogsArray[index].createHtml();
}

function toggleLikeBadge(index) {
  let img = document.querySelector('.badge');
  dogsArray[index].hasBeenLiked = true;
  dogsArray[index].hasBeenSwiped = false;
  img.setAttribute('src', 'images/badge-like.png');
  img.classList.remove('hidden');
}

function toggleNopeBadge(index) {
  let img = document.querySelector('.badge');
  dogsArray[index].hasBeenLiked = false;
  dogsArray[index].hasBeenSwiped = true;
  img.setAttribute('src', 'images/badge-nope.png');
  img.classList.remove('hidden');
}

let index = 0;

renderHtml(index);

btnLike.addEventListener('click', () => {
  toggleLikeBadge(index);

  index === dogs.length - 1 ? (index = 0) : index++;
  setTimeout(() => {
    renderHtml(index);
  }, 1000);
});

btnDislike.addEventListener('click', () => {
  toggleNopeBadge(index);

  index === dogs.length - 1 ? (index = 0) : index++;
  setTimeout(() => {
    renderHtml(index);
  }, 1000);
});
