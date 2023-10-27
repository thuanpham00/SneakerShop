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
        if (regexPass.test(input.value)) {
            showSuccess(input);
        } else {
            showError(
                input,
                `${getFieldName(
                    input
                )} is least 8 characters, 1 uppercase letter, 1 number & 1 symbol`
            );
        }
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!checkRequired([firstName, lastName, email, password])) {
            checkLength(firstName, 1, 15);
            checkLength(lastName, 1, 20);
            checkEmail(email);
            checkPassWord(password);
        }
    });

    // xử lý login
    const email2 = document.getElementById("email2");
    const password2 = document.getElementById("password2");
    const form2 = document.querySelector(".form-body.form-2");
    form2.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!checkRequired([email2, password2])) {
            checkEmail(email2);
            checkPassWord(password2);
        }
    });

    const formLogin = document.querySelector(".form__link.form__login");
    formLogin.addEventListener("click", function (e) {
        const remove = e.target.parentNode.nextElementSibling;
        remove.classList.remove("big-2");
        remove.nextElementSibling.classList.add("big-2");
        const line = document.createElement("div");
        line.className = "line";
        formLogin.appendChild(line);
        const cords = e.target.getBoundingClientRect();
        const { width, height, top, left } = cords;
        line.style.width = `${width * 4.27}px`;
        line.style.top = `${top - height - 63}px`;
        line.style.transform = `translateX(0%)`;
        // remove line form sign up
        const linee = e.target.parentNode.querySelector(".line");
        linee.parentNode.removeChild(linee);
    });
    const formSign = document.querySelector(".form__link.form__sign");
    formSign.addEventListener("click", function (e) {
        const remove = e.target.parentNode.nextElementSibling;
        remove.classList.add("big-2");
        remove.nextElementSibling.classList.remove("big-2");
        const line = document.createElement("div");
        line.className = "line";
        formLogin.appendChild(line);
        const cords = e.target.getBoundingClientRect();
        const { width, height, top, left } = cords;
        line.style.width = `${width * 3.5}px`;
        line.style.top = `${top - height - 63}px`;
        line.style.transform = `translateX(-93%)`;

        // remove line form login
        const lineee = e.target.nextElementSibling.querySelector(".line");
        lineee.parentNode.removeChild(lineee);
    });

    //API
    const endPoint = "https://dm92v6-8080.csb.app/loginInformation";
    async function addNewInfoLogin({ firstName, lastName, email, pass }) { // obj destructuring
        const response = await fetch(endPoint, {
            method: "POST", // thêm dữ liệu vào json
            body: JSON.stringify({ // chuyển nó thành chuỗi json
                firstName,
                lastName,
                email,
                pass,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
    }

    const popUp = document.querySelector(".pop-up")
    const formBody = document.querySelector(".form-body")
    formBody.addEventListener("submit", async function(e) {
        e.preventDefault();
        const infoLogin = { // obj
            firstName: this.elements["firstName"].value, // ["name"]
            lastName: this.elements["lastName"].value,
            email: this.elements["email"].value,
            pass: this.elements["password"].value
        }
        this.reset();
        await addNewInfoLogin(infoLogin)
        popUp.classList.add("visible")
        popUp.classList.remove("hidden")
    })
    

    const buttonContinue = document.querySelector(".btn.btn-Popup");
    buttonContinue.addEventListener("click", function(e) {
        const hihi = e.target.parentNode.parentNode;
        hihi.classList.add("hidden")
        hihi.classList.remove("visible");
        // console.log(formBig)
        // formBig.classList
        const SignUp = formSign.parentNode.nextElementSibling;
        const LogIn = formLogin.parentNode.nextElementSibling.nextElementSibling
        SignUp.classList.remove("big-2")
        LogIn.classList.add("big-2")
        // const line = document.createElement("div");
        // line.className = "line";
        // formLogin.appendChild(line);
        // const cords = e.target.getBoundingClientRect();
        // const { width, height, top, left } = cords;
        // line.style.width = `${width}px`;
        // line.style.top = `${top - 300}px`;
        // line.style.transform = `translateX(0%)`;
        // remove line form sign up
        // const linee = e.target.parentNode.querySelector(".line");
        // linee.parentNode.removeChild(linee);
    })
});
