
const input = document.querySelector('.images');
const searchBtn = document.querySelector("search-btn");
const gallery = document.querySelector('.gallery');

// 'lets'
let pagNu = 1;
let searchPg = false;
let query = "";

//input data in input field
input.addEventListener(".images", (e) => {
    e.preventDefault();
    query = e.target.value;
});
// fetch data
async function catchImg(query){

const data = await fetch(`https://pixabay.com/api/?key=15674931-a9d714b6e9d654524df198e00&q=${query}&image_type=photo&pretty=true`);

const result = await data.json();

    // show images showImages
    const catchImg = (hits) => {
        imagesArea.style.display = 'block';
        gallery.innerHTML = '';
      
        // show gallery title
        galleryHeader.style.display = 'flex';
    }

result.hits.forEach(hits => {

    const div = document.createElement('div');
    div.innerHTML = `<img class="img-fluid img-thumbnail" src="${hits.webformatURL}" alt="">`;
    gallery.appendChild(div);
    div.className = 'col-lg-3 col-md-4 col-xs-6 img-item mb-2';
    
});

}

catchImg(pagNu);

// selecting image 
document.querySelector('.images').addEventListener('click', clicked);

function clicked(event){
  let element = event.target;
  element.classList.add('added');
  element.classList.remove('img-effect');
}




/*

    const div = document.createElement('div');
    div.innerHTML = `<img class="img-fluid img-thumbnail" src="${hits.webformatURL}" alt="${hits.tags}">`;
    gallery.appendChild(div);
    div.className = 'col-lg-3 col-md-4 col-xs-6 img-item mb-2'; 

//catchImg(pagNu);


//console.log(getImages);
/*
// show images showImages
const showImages = (images) => {
  imagesArea.style.display = 'block';
  gallery.innerHTML = '';

  // show gallery title
  galleryHeader.style.display = 'flex';

  images.forEach(image);

  function image(index) {

    let div = document.createElement('div');
    div.innerHTML = `<img class="img-fluid img-thumbnail" src="${index.webformatURL}" alt="${index.tags}">`;
    gallery.appendChild(div);
    div.className = 'col-lg-3 col-md-4 col-xs-6 img-item mb-2'; 
  }

}

// selecting image 
document.querySelector('.images').addEventListener('click', clicked);

function clicked(event){
  let element = event.target;
  element.classList.add('added');
  element.classList.remove('img-effect');
}

var timer

searchBtn.addEventListener('click', function () {
  document.querySelector('.main').style.display = 'none';
  clearInterval(timer);
  const search = document.getElementById('search');
  getImages(search.value)
  sliders.length = 0;
})
*/
