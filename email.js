var input = document.querySelector('.footer_input') 
var Btn = document.querySelector('.footer_btn')
var errorMessage = document.querySelector('.footer_messenger')

Btn.onclick = function() {
    var inputs = input.value
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!inputs.match(regex)) {
        errorMessage.innerText = 'vui lòng nhập đúng email'
    } else {
       alert('bạn đã đăng ký thành công :))')
    }
}

input.onclick = function() {
    errorMessage.innerText = ''
}


