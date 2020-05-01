const sections = document.querySelectorAll('.section');
const nav = document.getElementById('nav');
const viewHeight = window.innerHeight;


//Goes to the top of the page when reloading
$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
  });


// Go to section
function ScrollElement(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", alignTo: "true", inline: "nearest" });
    closeNav();
}

// OWL Carousel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            600:{
                items: 3,
            }
        }
    });
});

// Reveal section
const revealSection = () => {

    sections.forEach(section => {
        const distanceFromTop = section.getBoundingClientRect().top;
        distanceFromTop < viewHeight - 100 ? section.classList.add('scroll-reveal') : null;
    });
};

// RetrieveNav
function retrieveNav() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos < 100) {
        document.getElementById("nav").style.height = "10vh";
        document.getElementById("nav").style.backgroundColor = "#ffffff80";

    } else {
        document.getElementById("nav").style.height = "6vh";
        document.getElementById("nav").style.backgroundColor = "#ffffff";
    }
    prevScrollpos = currentScrollPos;
}

// OpenNav
function openNav() {
    document.getElementById("sideNav").style.right = "0";
    document.getElementById("sideNav").style.opacity = "100%";
    document.getElementById("opacityDiv").style.zIndex = "99";
    document.getElementById("opacityDiv").style.opacity = "0.8";
    document.getElementById("opacityDiv").style.pointerEvents = "all";
    document.body.style.overflow = "hidden";
};
// CloseNav
function closeNav() {
    document.getElementById("sideNav").style.right = "-260px";
    document.getElementById("sideNav").style.opacity = "0%";
    document.getElementById("opacityDiv").style.zIndex = "-1";
    document.getElementById("opacityDiv").style.opacity = "0";
    document.getElementById("opacityDiv").style.pointerEvents = "none";
    document.body.style.overflow = "auto";
}

// Adding event listeners
window.addEventListener('load', () => revealSection());
window.addEventListener('scroll', () => revealSection());
window.addEventListener('load', () => retrieveNav());
window.addEventListener('scroll', () => retrieveNav());

// Copy number to clipboard
function copyToClipboard() {
    // Get the text field
    var input = document.getElementById("phoneNumber");
  
    // Select the text field
    input.select();
  
    // Copy the text inside the text field
    document.execCommand("copy");
  
    // Alert the copied text
    alert("Copiado al portapapeles.");

    //Unselects the content of the input
    input.blur(); 
  }