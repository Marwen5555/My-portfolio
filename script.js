let burger = document.querySelector('.burger');
let mobileNav = document.querySelector('.mobileNav');
let links= document.querySelectorAll('a');
let infoSections = document.querySelectorAll('.projects .info');


burger.addEventListener('click', function(){
    mobileNav.classList.toggle('classlistNav');
    body.classList.toggle('ClBodyNav');
});

let  body= document.querySelector('body');
let lune =document.querySelector('.moon');
let changeIcon= document.querySelector('.moon i');
let changeImage= document.querySelector('.landing .image img');
let source = false;
let icn = false;
let arrowTop = document.querySelector('.arrow-top');
let ankerlinksProjects= document.querySelectorAll('.projects a');
let ankerlinkLanding= document.querySelector('.landing .contact');
let btnSub = document.querySelector('footer .btn-sub');
let sliderButtons = document.querySelectorAll('.projects button');
let popup = document.querySelector('.popup');
let btn_cancel = document.querySelector('.cancel');
let skills_boxs = document.querySelectorAll('.skills .container>*');



lune.addEventListener('click', function(){
    body.classList.toggle('classlistDarkMode');
    links.forEach(function(ele){
    ele.classList.toggle('ankerLinks');
    });
    infoSections.forEach(function(ele){
        ele.classList.toggle('classlistInfo');
    });
    mobileNav.classList.toggle('classlistNavMobile');
    arrowTop.classList.toggle('classlistArrow');
    ankerlinksProjects.forEach(function(ele){
        ele.classList.toggle('ClasslistBg-ankerLink')
    });
    sliderButtons.forEach(function(ele){
        ele.classList.toggle('classlistsliderButtons')
    });

    popup.classList.toggle('classlisBgPopup')

    ankerlinkLanding.classList.toggle('ClasslistBg-ankerLink');
    btnSub.classList.toggle('ClasslistBg-ankerLink');

    btn_cancel.classList.toggle('classlistBtnCancel');

    skills_boxs.forEach(function(ele){
        ele.classList.toggle('classlistArrow');
    });

    if(source===false){
        changeImage.src="Images/profilPicture.png";
        source=true;
    } else{
        changeImage.src="Images/profile-pic.png";
        source=false;
    };

    if(icn===false){
        changeIcon.className ='fa-regular fa-sun';
        icn=true;
    }else{
        changeIcon.className ='fa-regular fa-moon';
        icn=false;
    };
});

window.addEventListener('scroll', function(){

    if(window.scrollY>400){
        arrowTop.style.display='flex';
    } else {
        arrowTop.style.display='none';
    }
});

let mobileLinks = document.querySelectorAll('.mobileNav a');
mobileLinks.forEach(function(ele){
ele.onclick= function(){
mobileNav.classList.remove('classlistNav');
body.classList.remove('ClBodyNav')
};
});


//Start caroussel scripting

let currentIndex = 0;

const projects = document.querySelectorAll('.projects .container>*');

const totalProjects = projects.length;

function moveCarousel(step) {
  // Calculer l'index du projet suivant
currentIndex = (currentIndex + step + totalProjects) % totalProjects;
  const offset = -currentIndex * 100; // Décalage en pourcentage

  // Appliquer la transformation pour déplacer la galerie
const container = document.querySelector('.projects .container');
container.style.transform = `translateX(${offset}%)`;
}
//End  caroussel scripting

// Start popup scripting
let contact_link= document.querySelector('.landing .contact');
let picProfil = document.querySelector('.pic-Profil');
console.log(picProfil);


contact_link.onclick = function(event){
    event.preventDefault();
    popup.classList.add('classlistPopup');
    body.classList.add('classlistBody');
    picProfil.classList.add('classlistPicProfil');
};

btn_cancel.onclick= function(){
    popup.classList.remove('classlistPopup');
    body.classList.remove('classlistBody');
    picProfil.classList.remove('classlistPicProfil');
}
// End popup scripting

// Start scroll reveal section

// Initialiser ScrollReveal
ScrollReveal().reveal('.skills .container div', {
    duration: 1000,   // Durée de l'animation en millisecondes
    delay: 200,       
    origin: 'bottom', // Direction de l'animation (peut être 'top', 'bottom', 'left', 'right')
    distance: '100px', // Distance parcourue par l'élément
    opacity: 0,       
    scale: 0.8,       // Échelle de départ
    interval: 200,    // Intervalle entre les animations des différents éléments
    reset: true       // Réinitialiser l'animation lorsque l'élément entre à nouveau dans la vue
});

// End scroll reveal section

// Start testimonials section

let currentIndexx = 0;
const testimonials = document.querySelectorAll('.testimonial-item');
const bullets = document.querySelectorAll('.bullets span');

// Fonction pour changer le témoignage visible
function showTestimonial(index) {
  // Masquer tous les témoignages
testimonials.forEach(testimonial => testimonial.classList.remove('active'));
  // Afficher le témoignage sélectionné
testimonials[index].classList.add('active');

  // Mettre à jour les puces (bullets)
bullets.forEach(bullet => bullet.classList.remove('active'));
bullets[index].classList.add('active');
}

// Fonction pour démarrer le carrousel
function startCarousel() {
setInterval(() => {
    currentIndexx = (currentIndexx + 1) % testimonials.length; // Passer au prochain témoignage
    showTestimonial(currentIndexx);
  }, 3000); // Change tous les 3 secondes
}

// Initialisation
showTestimonial(currentIndexx);
startCarousel();

// End testimonials section


