document.addEventListener("DOMContentLoaded", function() {
    const texts = ["I'm Carlo Centino", "BSIT 3-1", "21 yrs old"];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        document.getElementById('typing').textContent = letter;
        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000); // Wait before starting next text
        } else {
            setTimeout(type, 150);
        }
    }());
});


document.addEventListener("DOMContentLoaded", function() {
    // Function to animate the progress bars
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-bar');

        progressBars.forEach(bar => {
            const value = bar.getAttribute('data-value');
            bar.style.width = value + '%';
        });
    }

    // Run the animation function when the content is loaded
    animateProgressBars();
});


document.addEventListener("DOMContentLoaded", function() {
    // Function to animate the progress bars
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-bar');

        progressBars.forEach(bar => {
            const value = bar.getAttribute('data-value');
            bar.style.setProperty('--progress-value', value + '%');
        });

        const skillsSection = document.querySelector('#Skills');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    document.querySelector('.container3').classList.add('animate');
                }
            });
        });

        observer.observe(skillsSection);
    }

    // Run the animation function when the content is loaded
    animateProgressBars();
});

document.addEventListener("DOMContentLoaded", function() {
    const gearVideo = document.querySelector('.gear-video');
    const skillsContainer = document.querySelector('.skills');

    skillsContainer.addEventListener('mouseover', function() {
        gearVideo.play();
    });

    skillsContainer.addEventListener('mouseout', function() {
        gearVideo.pause();
        gearVideo.currentTime = 0;
    });
});

// Get the modal
var modal = document.getElementById("imageModal");

// Get the images and set click event listeners
var images = document.querySelectorAll(".gallery-image");
var modalImg = document.getElementById("modalImage");

images.forEach(function(image) {
    image.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// Close the modal when the user clicks anywhere outside the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

(function () {
    "use strict";
  
    var carousels = function () {
      $(".owl-carousel1").owlCarousel({
        loop: true,
        center: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          680: {
            items: 2,
            nav: false,
            loop: false
          },
          1000: {
            items: 3,
            nav: true
          }
        }
      });
    };
  
    (function ($) {
      carousels();
    })(jQuery);
  })();
  

