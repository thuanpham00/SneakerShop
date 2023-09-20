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
        
    });
    const formSign = document.querySelector(".form__link.form__sign");
    formSign.addEventListener("click", function (e) {
        const remove = e.target.parentNode.nextElementSibling
        remove.classList.add("big-2")
        remove.nextElementSibling.classList.remove("big-2")
    });
});
