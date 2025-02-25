// gallery script
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){showSlides(slideIndex+=n);}
function currentSlide(n){showSlides(slideIndex=n);}
function showSlides(n){
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let thumbnails = document.getElementsByClassName('thumbnail');
  if (n>slides.length){
    slideIndex=1;
  }
  if (n<1){
    slideIndex=slides.length;
  }
  for(i=0;i<slides.length;i++){
    slides[i].style.display="none";
  }
  for(i=0;i<thumbnails.length;i++){
    thumbnails[i].className = thumbnails[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  thumbnails[slideIndex-1].className += " active";
}
// modal script
const modalElement = document.getElementById('theModal');
const imageElement = document.getElementById('modal-image');
const spanElement = document.getElementsByClassName('close')[0];

imageElement.onclick = ()=>{
  modalElement.style.display = "block";
}
spanElement.onclick = ()=>{
  modalElement.style.display = "none";
}
window.onclick = (event)=>{
  if (event.target === modalElement){
    modalElement.style.display = "none";
  }
}
// spaghetti code
// event listener for changing the highlighted picture on the main site
document.getElementById('thumbnail-container').addEventListener('click', function(event) {
  if (event.target.tagName === "IMG") {
      const largeImageSource = event.target.getAttribute('data-large'); 
      document.getElementById('modal-image').src = largeImageSource;
      slideIndex = event.target.getAttribute('data-number');
      currentSlide(slideIndex);
      console.log(slideIndex);
  }
});
// event delegation for the four navigational images in the lightbox
document.getElementById('modal-thumbnail-container').addEventListener('click', function(event) {
  if (event.target.alt === "image1thumbnail") {
   currentSlide(1);
   console.log(slideIndex);
  } if (event.target.alt === "image2thumbnail") {
   currentSlide(2);
   console.log(slideIndex);
  } if (event.target.alt === "image3thumbnail") {
   currentSlide(3);
   console.log(slideIndex);
  } if (event.target.alt === "image4thumbnail") {
   currentSlide(4);
   console.log(slideIndex);
  }
});