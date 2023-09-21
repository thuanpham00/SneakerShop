window.addEventListener("load", function () {
    // xử lý icon passWord
    const iconPassword = document.querySelector(".form-control.form-4 i");
    iconPassword.addEventListener("click", function (e) {
        e.target.classList.toggle("fa-eye");
        e.target.classList.toggle("fa-eye-slash");
        if (password.type == "password") {
            password.type = "text";
        } else if (password.type == "text") {
            password.type = "password";
        }
    });

    // xử lý sign up
    const form = document.querySelector(".form-body");
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    // check thành công
    function showSuccess(input) {
        const small = input.nextElementSibling.nextElementSibling;
        small.textContent = "";
    }

    // check lỗi
    function showError(input, message) {
        const small = input.nextElementSibling.nextElementSibling;
        small.textContent = message;
    }

    function getFieldName(input) {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
        // trả về input có kí tự đầu tiên viết hoa tại kí tự đầu tiên và từ kí tự 1 trở đi thì nối vào
    }

    function checkRequired(listInput) {
        let check = false;
        listInput.forEach((input) => {
            if (input.value.trim() === "") {
                // nếu giá trị rỗng
                showError(input, `${getFieldName(input)} is required`);
                check = true;
            } else {
                showSuccess(input);
            }
        });
    }

    function checkEmail(input) {
        const regex =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (regex.test(input.value)) {
            showSuccess(input);
        } else {
            showError(input, `${getFieldName(input)} is not valid`);
        }
    }

    function checkLength(input, min, max) {
        if (input.value.length < min) {
            showError(
                input,
                `${getFieldName(input)} có tối thiểu ${min} kí tự`
            );
        } else if (input.value.length > max) {
            showError(input, `${getFieldName(input)} có tối đa ${max} kí tự`);
        } else {
            showSuccess(input);
        }
    }

    function checkPassWord(input) {
        const regexPass = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=!])(?=.{8,})/;
        if(regexPass.test(input.value)) {
            showSuccess(input);
        } else {
            showError(input, ``)
        }
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!checkRequired([firstName, lastName, email, password])) {
            checkLength(firstName, 8, 15);
            checkLength(lastName, 6, 20);
            checkEmail(email);
            checkLength(password, 6, 20);
        }
    });

    const formLogin = document.querySelector(".form__link.form__login");
    formLogin.addEventListener("click", function (e) {
        const remove = e.target.parentNode.nextElementSibling
        remove.classList.remove("big-2")
        remove.nextElementSibling.classList.add("big-2");
        const line = document.createElement("div");
        line.className = "line";
        formLogin.appendChild(line);
        const cords = e.target.getBoundingClientRect()
        const {width, height, top, left} = cords;
        line.style.width = `${width*4.27}px`
        line.style.top = `${top - height - 63}px`
        line.style.transform = `translateX(100%)`
        // remove line form sign up
        const linee = e.target.parentNode.querySelector(".line");
        linee.parentNode.removeChild(linee)
    });
    const formSign = document.querySelector(".form__link.form__sign");
    formSign.addEventListener("click", function (e) {
        const remove = e.target.parentNode.nextElementSibling
        remove.classList.add("big-2")
        remove.nextElementSibling.classList.remove("big-2");
        const line = document.createElement("div");
        line.className = "line";
        formLogin.appendChild(line);
        const cords = e.target.getBoundingClientRect()
        const {width, height, top, left} = cords;
        line.style.width = `${width*3.5}px`
        line.style.top = `${top - height - 63}px`
        line.style.transform = `translateX(0%)`

        // remove line form login
        const lineee = e.target.nextElementSibling.querySelector(".line");
        lineee.parentNode.removeChild(lineee)
    });
});
