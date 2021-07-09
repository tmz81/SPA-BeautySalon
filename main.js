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
const header = document.querySelector('#header');
const height = header.offsetHeight

window.addEventListener('scroll', ()=> {
  if(window.scrollY >= height){
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})