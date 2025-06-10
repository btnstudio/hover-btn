document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion1");

  accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
      const isActive = this.classList.contains("active");

      // Close all panels
      accordions.forEach((btn) => {
        btn.classList.remove("active");
        btn.nextElementSibling.style.display = "none";
      });

      // Open current if it wasn't already active
      if (!isActive) {
        this.classList.add("active");
        this.nextElementSibling.style.display = "block";
      }
    });
  });

  // Optionally open the first panel on page load
  if (accordions.length > 0) {
    accordions[0].classList.add("active");
    accordions[0].nextElementSibling.style.display = "block";
  }
});



$(document).ready(function () {
  $('.Education').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
           dots: true,

    responsive: [
      {
        breakpoint: 1024, // tablets and small desktops
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768, // tablets
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480, // mobile phones
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        }
      }
    ]
  });
});


$(document).ready(function () {
  $('.autoplay').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024, // tablets and small desktops
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768, // tablets
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480, // mobile phones
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});




function toggleMenu() {
  const navMenu = document.getElementById('navMenu');
  navMenu.classList.toggle('active');
}