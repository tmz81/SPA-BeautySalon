const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggler');

for(const element of toggle){
   element.addEventListener('click', ()=> {
     nav.classList.toggle('show')
   } )
};

// ==== CLOSE MENU ====
const links = document.querySelectorAll('nav ul li a')

for(const link of links){
  link.addEventListener('click', ()=> {
    nav.classList.remove('show')
  })
}

// CHANGE HEADER SCROLL
function changeHeaderWhenScroll() {
  const header = document.querySelector('#header');
  const height = header.offsetHeight
  
  if(window.scrollY >= height){
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}


// SLIDES
const swiper = new Swiper('.swiper-container', {
  slidePerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

// SCROLLREVEAL

const scrollReveal = new ScrollReveal({
  origin: 'top',
  distance: '30px', 
  duration: 700,
  reset: true
})

scrollReveal.reveal(`
  #home .image, #home .text,
  #about .image, #about .text,
  #services .image, #services .text,
  #testimonials .header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }  
)

/* Button back to top */
function backToTop() {
  const button = document.querySelector('.back-to-top');

  if(window.scrollY >= 560) {
    button.classList.add('show')
  } else {
    button.classList.remove('show')
  }
}

window.addEventListener('scroll', () => {
  changeHeaderWhenScroll()
  backToTop()
})