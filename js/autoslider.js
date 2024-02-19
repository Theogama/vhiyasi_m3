// Function to initialize and control each slideshow
function startSlider(sliderId) {
  var slideIndex = 0;
  var slides = document.querySelectorAll('#' + sliderId + ' .slide');

  function showSlide() {
      for (var i = 0; i < slides.length; i++) {
          slides[i].style.display = 'none';
      }
      slideIndex++;
      if (slideIndex > slides.length) {
          slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = 'block';
      setTimeout(showSlide, 2000); // Change slide every 2 seconds (2000 milliseconds)
  }

  showSlide();
}

// Start each slider
startSlider('slider1'); // ID of the first slider container
startSlider('slider2'); // ID of the second slider container
startSlider('slider3'); // ID of the third slider container
startSlider('slider4'); // ID of the fourth slider container
startSlider('slider5'); // ID of the fifth slider container
startSlider('slider6'); // ID of the sixth slider container
startSlider('slider7'); // ID of the seventh slider container
startSlider('slider8'); // ID of the eighth slider container
startSlider('slider9'); // ID of the ninth slider container
startSlider('slider10'); // ID of the tenth slider container
startSlider('slider11'); // ID of the eleventh slider container
startSlider('slider12'); // ID of the twelveth slider container


