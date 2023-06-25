document.addEventListener("DOMContentLoaded", function() {
    const sliderImages = document.querySelectorAll(".img2 img");
    let currentImageIndex = 0;
  
    function showImage(index) {
      sliderImages.forEach(function(img) {
        img.classList.remove("active");
      });
  
      sliderImages[index].classList.add("active");
    }
  
    function nextImage() {
      currentImageIndex++;
      if (currentImageIndex >= sliderImages.length) {
        currentImageIndex = 0;
      }
      showImage(currentImageIndex);
    }
  
    setInterval(nextImage, 2300);
  });
  