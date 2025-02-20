// gallery script
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){showSlides(slideIndex+=n);}
function currentSlide(n){showSlides(slideIndex=n);}
function showSlides(n){
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let thumbnails = document.getElementsByClassName('thumbnail');
  if (n>slides.length){slideIndex=1}
  if (n<1){slideIndex=slides.length}
  for(i=0;i<slides.length;i++){
    slides[i].style.display="none";
  }
  for(i=0;i<thumbnails.length;i++){
    thumbnails[i].className = thumbnails[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  thumbnails[slideIndex-1].style.display = "active";
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
document.getElementById('thumbnail-container').addEventListener('click', function(event) {
  if (event.target.tagName === "IMG") {
      const largeImageSource = event.target.getAttribute('data-large');
      document.getElementById('modal-image').src = largeImageSource;
      slideIndex = event.target.getAttribute('data-number');
      currentSlide(slideIndex);
  }
});