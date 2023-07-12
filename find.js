var searchHeader = document.querySelector('.header_navbar-search')
var input = document.querySelector('.modal_search-input')
var row = document.querySelector('.row')
var col = document.querySelectorAll('.col.l-2-4')
var modalSearch = document.querySelector('.modal')
var modalSearchBtn = document.querySelector('.modal_search-btn')
var modalSuggest = document.querySelector('.modal_search-suggest')
var modalLoading = document.querySelector('.modal_search-loading')


input.addEventListener('keyup', (event) => {
   const valueInput = event.target.value.trim().toLowerCase()
   switch(event.keyCode) {
      case 13: 
        Product(valueInput)
        modalSearch.classList.add('close')
        input.value = ''
        modalSuggest.classList.remove('open4')
        break;
   }
})

modalSearchBtn.addEventListener('click', () => {
   var searchValue = input.value
   if(searchValue) {
      Product(searchValue)
      modalSearch.classList.add('close')
      input.value = ''
      modalSuggest.classList.remove('open4')
   } else {
      modalSearch.classList.remove('close')
      alert('vui lòng nhập tên sản phẩm')
   }
})

function Product(value) {
   col.forEach(product => {
      if(product.innerText.toLowerCase().includes(value)) {
         product.style.display = 'block'
      } else {
         product.style.display = 'none'
      }
   })
}

input.addEventListener('input', (e) => {
   var valueInput = e.target.value.trim().toLowerCase()
   var list = [ 'Áo sơ mi kẻ', 'Áo thun nam',
    'Áo khoác nam','Quần jeans', 'Quần ngắn nam', 'Quần dài nam', ]

   modalSuggest.innerHTML = ''
   list.forEach(listItem => {
      if(listItem.toLowerCase().includes(valueInput)) {
         var listData = document.createElement('li')
         listData.classList.add('modal_search-suggest-item')
         var att = document.createAttribute("type")
         att.value = `${listItem}`
         listData.setAttributeNode(att)
         listData.innerHTML = listItem
         modalSuggest.appendChild(listData)
         modalSuggest.classList.add('open4')
         var listType = document.querySelectorAll('.modal_search-suggest-item')
         listType.forEach((item) => {
            item.onclick = function (e) {
               var type = e.target.type
               Array.from(col).filter(item => {
                 var type2 = item.getAttribute('type')
                
                 if(type2 === type) {
                     item.style.display = 'block'
                 } else {
                     item.style.display = 'none'
                 }
               })
               modalSearch.classList.add('close')
               input.value = ''
               modalSuggest.classList.remove('open4')
            }
         })
      }
      if(!valueInput) {
         modalSuggest.innerHTML = ''
      }
   })
})


searchHeader.addEventListener('click', () => {
   modalSearch.classList.remove('close')
})



   