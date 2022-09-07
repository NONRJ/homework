document.form.userName.addEventListener("change", validateChange);
document.form.email.addEventListener("change", validateChange);
document.form.zip.addEventListener("change", validateChange);
document.form.addEventListener('submit', onsubmitHandler);

function validate(elem, pattern) {
    var res = pattern.test(elem.value);
    if (!res) {
        elem.className = "invalid";
    } // установка CSS класса 
    else {
        elem.className = "valid";
    }
}


// метод проверки значения в элементе по регулярному выражению.
function validateChange(e) {
    if(this.closest('[name="userName"]')) {
        var pattern = /\S/;
        validate(this, pattern);
    } else if (this.closest('[name="email"]')) {
        var pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
        validate(this, pattern);
    } else if (this.closest('[name="zip"]')) {
        var pattern = /\d{5}/;
        validate(this, pattern);
    }
}

// событие при отправке формы на сервер.
function onsubmitHandler(event) {

    for (var i = 0; i < form.elements.length; i++) {
        if(form.elements[i].className === 'invalid') {
            alert("Допущены ошибки при заполнении формы.");
            event.preventDefault();
            break;
        }
    }
   
}