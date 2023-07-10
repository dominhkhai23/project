var searchHeader = document.querySelector('.header_navbar-search')
var input = document.querySelector('.modal_search-input')
var row = document.querySelector('.row')
var listProduct = document.querySelectorAll('.content_product')
var col = document.querySelectorAll('.col.l-2-4')
var modalSearch = document.querySelector('.modal')
var modalSearchBtn = document.querySelector('.modal_search-btn')
var modalSuggest = document.querySelector('.modal_search-suggest')
var modalLoading = document.querySelector('.modal_search-loading')

var data = [
   {
      img: 'https://product.hstatic.net/200000696635/product/frame_64_2e43ad9070f041aa8d80f8b47ed34876_medium.png',
      name: 'Áo sơ mi kẻ sọc - Pink',
      price: '499,000₫'
   },
   {
      img: 'https://product.hstatic.net/200000696635/product/frame_62_d41e2c3c7f3f47289f6dac45b3af0f0c_medium.png',
      name: 'Quần dài nam - Brown',
      price: '799,000₫'
   },
   {
      img: 'https://product.hstatic.net/200000696635/product/frame_56_5e2199fb082041d3ab669075a49c7665_medium.png',
      name: 'Áo khoác nam - Grey',
      price: '499,000₫'
   },
   {
      img: 'https://product.hstatic.net/200000696635/product/frame_71_aa2edc2c58d64d12b573c5833d129f2f_medium.png',
      name: 'Quần ngắn nam - Brown',
      price: '499,000₫'
   },
   {
      img: 'https://product.hstatic.net/200000696635/product/frame_64_2e43ad9070f041aa8d80f8b47ed34876_medium.png',
      name: 'Áo sơ mi kẻ sọc - White',
      price: '499,000₫'
   },
   {
      img: 'https://product.hstatic.net/200000696635/product/frame_66_d1372db2da6745bb9263cc35586b4fda_medium.png',
      name: 'Áo sơ mi kẻ sọc - Pink',
      price: '499,000₫'
   },
   {
      img: 'https://product.hstatic.net/200000696635/product/frame_74_e16dcdce7c2a41d286587294ba0d123c_medium.png',
      name: 'Áo sơ mi kẻ sọc - Pink',
      price: '499,000₫'
   },
   {
      img: 'https://product.hstatic.net/200000696635/product/frame_13_1ebea68b4c724dcea33c65117c5c9c8d_medium.png',
      name: 'Áo thun nam - Brown',
      price: '499,000₫'
   },
   {
      img: 'https://product.hstatic.net/200000696635/product/frame_14_b72c7539500344b5b76513f5de74c83c_medium.png',
      name: 'Áo thun nam - green',
      price: '499,000₫'
   },
   {
      img: 'https://product.hstatic.net/200000696635/product/frame_76_3f5b889e8a2b4d54b910ed464dc22974_medium.png',
      name: 'Quần jeans nam FIT - xanh rêu',
      price: '799,000₫'
   },
]
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
   var valueInput = e.target.value
   var list = [ 'áo sơ mi-white', 'áo thun-black', 'áo thun-green', 'áo thun-gray', 'áo sơ mi-black',
    'quần jeans', 'quần ngắn', 'quần dài']

   modalSuggest.innerHTML = ''
   list.forEach(listItem => {
      if(listItem.includes(valueInput)) {
         var listData = document.createElement('li')
         listData.classList.add('modal_search-suggest-item')
         listData.innerHTML = listItem
         modalSuggest.appendChild(listData)
         modalSuggest.classList.add('open4')
      }
      if(!valueInput) {
         modalSuggest.innerHTML = ''
      }
   })
})


searchHeader.addEventListener('click', () => {
   modalSearch.classList.remove('close')
})



   