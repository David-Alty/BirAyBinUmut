// Hamburger Menü İşlevi
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    // Menüyü Aç/Kapat
    navLinks.classList.toggle('nav-active');

    // Link animasyonları
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    // Hamburger İkon Animasyonu (Basit değişim)
    hamburger.classList.toggle('toggle');
});

// Menü linkine tıklanınca menüyü kapat
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
        links.forEach(l => l.style.animation = '');
    });
});

// Sayfa Kaydırma Animasyonu (Scroll Reveal)
window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

// FAQ touch/click support: toggle open class on touch devices or when clicked
(function(){
    const faqItems = document.querySelectorAll('.faq-item');
    if(!faqItems || faqItems.length === 0) return;

    const isTouch = ('ontouchstart' in window) || window.matchMedia('(hover: none)').matches;

    faqItems.forEach(item => {
        const q = item.querySelector('.faq-question');
        if(!q) return;

        q.addEventListener('click', (e) => {
            if(isTouch){
                // close others
                faqItems.forEach(i => { if(i !== item) i.classList.remove('open'); });
                // toggle this one
                item.classList.toggle('open');
            }
        });
    });
})();