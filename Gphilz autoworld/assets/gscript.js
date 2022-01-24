const slider = document.querySelector(".carousel-container")
const nextBtn = document.querySelector(".next-button");
const prevBtn = document.querySelector(".prev-button");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-points");
const numberOfSlides = slides.length;
let slideNumber = 0;


function displayMobileNav(){
    let mobileNav = document.getElementById('nav-drop');
    mobileNav.setAttribute('class','mobile-nav-hider');
}

function closeMobileNav(){
    let closeNav = document.getElementById('nav-drop');
    closeNav.setAttribute('class', 'nav-list-drop');
}

nextBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active")
    })
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active")
    })

    slideNumber ++;

    if(slideNumber > (numberOfSlides - 1)){
        slideNumber = 0
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

prevBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active")
    })
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active")
    })

    slideNumber --;

    if(slideNumber < 0){
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
})

    var playSlider;
    var repeater = () => {
        playSlider = setInterval(function(){
            slides.forEach((slide) => {
                slide.classList.remove("active")
            })
            slideIcons.forEach((slideIcon) => {
                slideIcon.classList.remove("active")
            })
        
            slideNumber ++;
        
            if(slideNumber > (numberOfSlides - 1)){
                slideNumber = 0
            }
        
            slides[slideNumber].classList.add("active");
            slideIcons[slideNumber].classList.add("active");
        }, 4000);
    }
    repeater();


slider.addEventListener("mouseover", () => {
    clearInterval(playSlider);
})

slider.addEventListener("mouseout", () => {
    repeater();
})




