// const imagesArea = document.querySelector('.images');
// const gallery = document.querySelector('.gallery');
// const galleryHeader = document.querySelector('.gallery-header');
// const searchBtn = document.getElementById('search-btn');
// const sliderBtn = document.getElementById('create-slider');
// const sliderContainer = document.getElementById('sliders');

// // selected image 
// let sliders = [];

//const next = document.querySelector('.next');

const input = document.querySelector("input");
const searchBtn = document.querySelector("search-btn");

// 'lets'
let pagNu = 1;
let searchPg = false;
let query = "";

//input data in input field
input.addEventListener("input", (e) => {
    e.preventDefault();
    query = e.target.value;
});

// If this key doesn't work, its work!
const KEY = '15674931-a9d714b6e9d654524df198e00&q';

async function catchImg(pagNu){
const data = await fetch(`https://pixabay.com/api/?key=${KEY}=${query}&image_type=photo&pretty=true`)

const result = await data.json();


console.log(result);
}

/*

// If this key doesn't work, its work!
const KEY = '15674931-a9d714b6e9d654524df198e00&q';
// after transform data in json move to create array 'data.hits' 
const getImages = (query) => {
  fetch(`https://pixabay.com/api/?key=${KEY}=${query}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => showImages(data.hits))
    .catch(err => console.log(err));
}

*/