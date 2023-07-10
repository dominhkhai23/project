const heartBtn = document.querySelectorAll('.content_product-heart')
var isRed = false
heartBtn.forEach( btn => {
    btn.addEventListener('click', (e) => {
        if (!isRed) {
          isRed = true
          e.target.style.color = 'red'
        } else {
          isRed = false
          e.target.style.color = 'black'
        }
     } )
})