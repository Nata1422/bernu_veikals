
/* Owl-carousel */
$(document).ready(function (){
    $('.owl-carousel').owlCarousel({
        items:4,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    });

/* Nav__mega-menu Mobile */
    $('#Layer_1').click(function () {
        $('.dropdown-content').toggleClass('dropdown-content_open');
    })
});

/* Registration, When the user clicks on the button,
toggle between hiding and showing the dropdown content,  */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.hidden')) {
        let dropdowns = document.getElementsByClassName("dropdown-menu");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


