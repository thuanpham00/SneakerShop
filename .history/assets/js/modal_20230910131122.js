window.addEventListener("load", function() {
    const numberModal = document.querySelector(
        ".modal-quantity__counterNumber"
    );
    document.body.addEventListener("click", function (e) {
        if (e.target.matches(".modal-quantity__counterLeft")) {
            const text = e.target.nextElementSibling.textContent;
            const textMinus = text - 1;
            // text.textContent = textMinus;
        } else if (e.target.matches(".modal-quantity__counterRight")) {
            const text = parseInt(e.target.previousElementSibling.textContent);
            const textPlus = text + 1;
            // numberModal.textContent = textPlus;
            console.log(textPlus)
        }
    });
    const buttonModalRight = document.querySelector(
        ".modal-quantity__counterRight"
    );
})