var scrollBtn = document.querySelector('.scroll-btn')

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100) {
      scrollBtn.style.display = 'block'
    } else {
        scrollBtn.style.display = 'none'
    }
})

scrollBtn.onclick = function() {
    window.scrollTo(0, 0)
    
}