// global variables and elements on top
const imageElement = document.getElementById("modal-image");
const modalElement = document.getElementById("theModal");
const spanElement = document.getElementsByClassName("close")[0];

// onclick listener for the image that pops open the lightbox gallery, and for closing it
imageElement.onclick = () => {
  modalElement.style.display = "block";
};
spanElement.onclick = () => {
  modalElement.style.display = "none";
};
window.onclick = (event) => {
  if (event.target === modalElement) {
    modalElement.style.display = "none";
  }
};
// gallery script - using a for loop to loop through the array of images and show the image with the current slideIndex value
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let thumbnails = document.getElementsByClassName("thumbnail");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < thumbnails.length; i++) {
    thumbnails[i].className = thumbnails[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  thumbnails[slideIndex - 1].className += " active";
}

// event listener for changing the highlighted picture on the main site
document
  .getElementById("thumbnail-container")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "IMG") {
      const largeImageSource = event.target.getAttribute("data-large");
      document.getElementById("modal-image").src = largeImageSource;
      slideIndex = event.target.getAttribute("data-number");
      currentSlide(slideIndex);
    }
  });
// event delegation for the four navigational images in the lightbox
document
  .getElementById("modal-thumbnail-container")
  .addEventListener("click", function (event) {
    if (event.target.alt === "image1thumbnail") {
      currentSlide(1);
    }
    if (event.target.alt === "image2thumbnail") {
      currentSlide(2);
    }
    if (event.target.alt === "image3thumbnail") {
      currentSlide(3);
    }
    if (event.target.alt === "image4thumbnail") {
      currentSlide(4);
    }
  });
// swaps the highlight for the active small image
document
  .getElementById("thumbnail-container")
  .addEventListener("click", (event) => {
    if (event.target.classList.contains("image-small")) {
      const images = document.querySelectorAll(".js-image-small");
      images.forEach((image) => {
        image.classList.remove("active-thumbnail");
      });
      event.target.classList.add("active-thumbnail");
    }
  });
//mobile gallery functions - similar to desktop, just different class/element names
let mobileSlideIndex = 0;
mobileShowSlides();
function mobileShowSlides() {
  const mobileSlides = document.getElementsByClassName("mobile-gallery-slide");
  for (let i = 0; i < mobileSlides.length; i++) {
    mobileSlides[i].style.display = "none";
  }
  mobileSlideIndex++;
  if (mobileSlideIndex > mobileSlides.length) {
    mobileSlideIndex = 1;
  }
  mobileSlides[mobileSlideIndex - 1].style.display = "block";
}
function mobileChangeSlide(n) {
  mobileSlideIndex += n;
  const mobileSlides = document.getElementsByClassName("mobile-gallery-slide");
  if (mobileSlideIndex > mobileSlides.length) {
    mobileSlideIndex = 1;
  }
  if (mobileSlideIndex < 1) {
    mobileSlideIndex = mobileSlides.length;
  }
  for (let i = 0; i < mobileSlides.length; i++) {
    mobileSlides[i].style.display = "none";
  }
  mobileSlides[mobileSlideIndex - 1].style.display = "block";
}
