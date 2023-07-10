const menuBtn = document.querySelector('.header_navbar-menu')
const modal3 = document.querySelector('.modal3') 
const modal3Overlay = document.querySelector('.modal3_overlay') 
menuBtn.addEventListener('click', () => {
  modal3.style.display = 'block'
})

modal3Overlay.addEventListener('click', () => {
  modal3.style.display = 'none'
})

