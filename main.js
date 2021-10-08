// char - caractere
// string - um conjunto de caracteres
//number - numeros
//boolean - true ou false
//if - se
//DOM Document Object Model

// ABRE E FECHA O MENU QUANDO CLICAR NO ICONE
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}
// QUANDO CLICAR EM UM ITEM DO MENU, ESCONDER O MENU
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//MUDAR O HEADER DA PAGINA QUANDO DER SCROLL
const header = document.querySelector('header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
})

// CARROSEL DO TESTIMONIALS
const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// SCROLL REVEAL

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})
scrollReveal.reveal(
  `#home .text, #home .image,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links
  `,

  { interval: 100 }
)

// MENU ATIVO CONFORME A SESSÃO VISIVEL NA PÁGINA
