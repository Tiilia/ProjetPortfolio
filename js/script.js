

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li'); // on sélectionne TOUS les liens du menu 
    
   
    burger.addEventListener('click', () => { 
        // Apparition menu
        nav.classList.toggle('nav-active');
    
    
        // Animation des liens dans l'ordre de leur index 
        navLinks.forEach((link, index) => {
            // la condition permet à l'animation de se faire à chaque ouverture du menu et pas uniquement la première fois, obligeant de recharher la page pour voir l'effet
            if(link.style.animation){
                link.style.animation = ''
            } else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`; // attention ce sont des `` et non des ''
            }

        });


        // Animation burger
        burger.classList.toggle('toggle');
        
    });
}

navSlide();

window.onload = () => { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
            duration: "20%" // this works just fine with duration 0 as well
            // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
            // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
        }
    });

    // get all slides
    var slides = document.querySelectorAll("section.panel");

    // create scene for every slide
    for (var i=0; i<slides.length; i++) {
        new ScrollMagic.Scene({
                triggerElement: slides[i]
            })
            .setPin(slides[i], {pushFollowers: false})
            .addTo(controller);
    }
}

