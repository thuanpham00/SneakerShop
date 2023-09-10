window.addEventListener("load", function () {
    const modalCounterLeft = document.querySelector(
        ".modal-quantity__counterLeft"
    );
    modalCounterLeft.addEventListener("click", function(e) {
        console.log("left")
    })
    const modalCounterRight = document.querySelector(
        ".modal-quantity__counterRight"
    );
    modalCounterRight.addEventListener("click", function(e) {
        console.log("right")
    })
});
