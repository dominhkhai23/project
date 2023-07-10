function validator(options) {
   var formElement = document.querySelector(options.form);
   if(formElement) {
        formElement.onsubmit = function(e) {
            e.preventDefault();
            options.rules.forEach( rule => {
                var inputElement = document.querySelector(rule.selector)
                var valueInput = inputElement.value
                var errorElement = rule.test(valueInput)
                var errorMessage = inputElement.parentElement.querySelector('.login_body-group-messenger')
                if(errorElement) {
                    errorMessage.innerText = errorElement
                } else {
                    errorMessage.innerText = ''
                    alert('Bạn đã đăng nhập thành công')
                } 
            })
        }
        options.rules.forEach( rule => {
            var inputElement = document.querySelector(rule.selector)
            if(inputElement) {
                inputElement.onblur = function() {
                    var valueInput = inputElement.value
                    var errorElement = rule.test(valueInput)
                    var errorMessage = inputElement.parentElement.querySelector('.login_body-group-messenger')
                    if(errorElement) {
                        errorMessage.innerText = errorElement
                    }
                }

                inputElement.oninput = function() {
                    var errorMessage = inputElement.parentElement.querySelector('.login_body-group-messenger')
                    errorMessage.innerText = ''
                }
            }
      })
   }
   
  
}


validator.isEmail = function(selector) {
   return {
        selector: selector,
        test(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : 'vui lòng nhập đúng Email'
        }
   }
}

validator.isPassword = function(selector, min) {
    return {
        selector: selector,
        test(value) {
            return value >= min ? undefined : `vui lòng nhập đủ ${min} ký tự`
        }
    }
}