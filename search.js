const searchModal = document.querySelector('.modal_search-icon')
const modal = document.querySelector('.modal')
const modalOverlay = document.querySelector('.modal_overlay')
var searchHeader = document.querySelector('.header_navbar-search')

searchHeader.addEventListener('click', () => {
    modal.classList.add('open')
})

searchModal.addEventListener('click', () => {
    modal.classList.remove('open')
})

modalOverlay.addEventListener('click', () => {
    modal.classList.remove('open')
})


