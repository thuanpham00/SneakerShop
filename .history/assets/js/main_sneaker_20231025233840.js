// call api
const limit = 20;
const endPointSneaker = `https://dm92v6-8080.csb.app/productSneaker?_limit=${limit}`;
const sneakerList = document.querySelector(".sneaker-list");
let currentPage = 1;
let data = [];
function renderItemSneaker(item) {
    const template = `<div class="sneaker__item">
    <a href="#!" class="sneaker__link"
        ><img
            src="${item.image}"
            alt="Sneaker"
            class="sneaker__pic"
        />
        <div class="sneaker__icon">
            <i class="fa-regular fa-heart"></i>
        </div>
        <h3 class="sneaker__title line-clamp">
            ${item.title}
        </h3>
        <p class="sneaker__desc">Lowest Ask</p>
        <div class="sneaker-row">
            <span class="sneaker__buy"
                >${item.price}
            </span>
            <div class="sneaker__usd">$</div>
        </div>
    </a>
</div>`;
    sneakerList.insertAdjacentHTML("beforeend", template);
}
// lấy dữ liệu từ json sneaker và get ra giao diện
async function getProductSneaker(page = 1) {
    const response = await fetch(`${endPointSneaker}&_page=${page}`);
    const newData = await response.json();
    data = newData; // thêm dữ liệu vào mảng
    sneakerList.innerHTML = ""; // trước khi render product thì nội dung của nó rỗng
    if (data.length > 0 && Array.isArray(data)) {
        data.forEach((item) => {
            renderItemSneaker(item);
        });
    }
}
getProductSneaker();

const numberPage = document.querySelectorAll(".link-number");
[...numberPage].forEach((item, index) =>
    item.addEventListener("click", async function () {
        [...numberPage].forEach((item) => item.classList.remove("active"));
        item.classList.add("active");
        const page = index + 1;
        currentPage = page;
        await getProductSneaker(page);
    })
);
function createModal(nameProduct, image, price) {
    const templateModal = `<div class="modal">
    <div class="container">
        <div class="modal__body">
            <figure class="modal__left">
                <h3 class="modal__heading">
                    ${nameProduct}
                </h3>
                <img
                    src="${image}"
                    alt=""
                    class="modal__img"
                />
            </figure>
            <div class="modal__right">
                <div class="modal-sold">
                    <img
                        src="./assets/img/home/modal/1.jpg"
                        alt=""
                        class="modal-sold__icon"
                    />
                    <div class="modal-sold__desc">
                        365 sold in Last 3 days!
                    </div>
                </div>
                <div class="modal__box">
                    <div class="modal-info">
                        <div class="modal-info__size">Size:</div>
                        <button class="modal-info__all">
                            <span>All</span>
                            <i class="fa-solid fa-arrow-down arrowModal"></i>
                            
                        </button>
                        <div class="modal-tableSize">
                            <div class="modal-tableSize__row">
                                <span class="modal-tableSize__size">All</span>
                                <span class="modal-tableSize__price">${price}</span>
                            </div>
                            <div class="modal-tableSize__list row row-cols-lg-3 row-cols-md-3 row-cols-3">
                                <div class="modal-tableSize__item">
                                    <span class="modal-tableSize__size sizeUS">US M 4</span>
                                    <span class="modal-tableSize__price">$1,327</span>
                                </div>
                                <div class="modal-tableSize__item">
                                    <span class="modal-tableSize__size sizeUS">US M 4.5</span>
                                    <span class="modal-tableSize__price">$600</span>
                                </div>
                                <div class="modal-tableSize__item">
                                    <span class="modal-tableSize__size sizeUS">US M 5</span>
                                    <span class="modal-tableSize__price">$354</span>
                                </div>
                                <div class="modal-tableSize__item">
                                    <span class="modal-tableSize__size sizeUS">US M 5.5</span>
                                    <span class="modal-tableSize__price">$458</span>
                                </div>
                                <div class="modal-tableSize__item">
                                    <span class="modal-tableSize__size sizeUS">US M 6</span>
                                    <span class="modal-tableSize__price">$258</span>
                                </div>
                                <div class="modal-tableSize__item">
                                    <span class="modal-tableSize__size sizeUS">US M 6.5</span>
                                    <span class="modal-tableSize__price">$277</span>
                                </div>
                                <div class="modal-tableSize__item">
                                    <span class="modal-tableSize__size sizeUS">US M 7</span>
                                    <span class="modal-tableSize__price">$304</span>
                                </div>
                                <div class="modal-tableSize__item">
                                    <span class="modal-tableSize__size sizeUS">US M 7.5</span>
                                    <span class="modal-tableSize__price">$327</span>
                                </div>
                                <div class="modal-tableSize__item">
                                    <span class="modal-tableSize__size sizeUS">US M 8</span>
                                    <span class="modal-tableSize__price">$325</span>
                                </div>
                                <div class="modal-tableSize__item">
                                    <span class="modal-tableSize__size sizeUS">US M 8.5</span>
                                    <span class="modal-tableSize__price">$328</span>
                                </div>
                                <div class="modal-tableSize__item">
                                    <span class="modal-tableSize__size sizeUS">US M 9</span>
                                    <span class="modal-tableSize__price">$340</span>
                                </div>
                                <div class="modal-tableSize__item">
                                    <span class="modal-tableSize__size sizeUS">US M 9.5</span>
                                    <span class="modal-tableSize__price">$349</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-buy">
                        <div class="modal-buy__btn">
                            <a href="#!" class="modal-buy__link"
                                >Place Bid</a
                            >
                        </div>
                        <div class="modal-buy__btn btn-2">
                            <a href="#!" class="modal-buy__link"
                                >Buy for ${price} $</a
                            >
                        </div>
                    </div>
                    <div class="modal-quantity">
                        <span>Số lượng</span>
                        <div class="modal-quantity__counter">
                            <button class="modal-quantity__counterLeft">
                                <i class="fa-solid fa-minus"></i>
                            </button>
                            <span class="modal-quantity__counterNumber">1</span>
                            <button class="modal-quantity__counterRight">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </div>
                    </div>
<div class="modal__priceProduct">
                            <div class="modal__priceProduct-row">
                                <span class="price">Amount:</span>
                                <span class="priceAmount">1</span>
                            </div>
                            <div class="modal__priceProduct-row">
                                <span class="price">Price:</span>
                                <div class="modal__priceProduct-row2">
                                    <span class="price priceProduct">${price}</span>
                                    <span class="usd">$</span>
                                </div>
                            </div>
                            <div class="modal__priceProduct-row">
                                <span class="price">Total:</span>
                                <div class="modal__priceProduct-row2">
                                    <span class="price priceTotal">${price}</span>
                                    <span class="usd">$</span>
                                </div>
                            </div>
                        </div>
                        </div>
                        <button class="cart">
                            <a href="#!">Add to cart</a>
                        </button>
            </div>
            <div class="modal__icon">
                <i class="fa-solid fa-x"></i>
            </div>
        </div>
    </div>
</div>`;
    document.body.insertAdjacentHTML("beforeend", templateModal);
}
const sneakerList1 = document.querySelector(".sneaker-list");
sneakerList1.addEventListener("click", function (e) {
    if (e.target.matches(".sneaker__pic")) {
        // xử lý hình
        const imageModal = e.target;
        const imageModal2 = imageModal.getAttribute("src");
        console.log(imageModal2);

        // xử lý name
        const nameProduct = e.target.nextElementSibling.nextElementSibling;
        const nameProductModal = nameProduct.textContent;
        console.log(nameProductModal);

        // xử lý giá
        const priceRcm =
            e.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.querySelector(
                ".sneaker__buy"
            ).textContent;
        createModal(nameProductModal, imageModal2, priceRcm);
        const amountProduct = document.querySelector(".priceAmount");
            const numberModal = document.querySelector(
                ".modal-quantity__counterNumber"
            );
    }
});

const rcmImg = document.querySelectorAll(".sneaker__pic");
[...rcmImg].forEach((item) =>
    item.parentNode.parentNode.addEventListener("click", function (e) {
        // item

        console.log(item.parentNode.parentNode); // item

        // xử lý hình trong modal
        const imageModal = e.target.querySelector(".sneaker__pic"); // từ item di vào cái hình
        const imageModal2 = imageModal.getAttribute("src");

        // xử lý name trong modal
        const nameProduct = item.nextElementSibling.nextElementSibling;
        const nameProductModal = nameProduct.textContent;

        // xử lý giá
        const priceRcm =
            item.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.querySelector(
                ".sneaker__buy"
            ).textContent;
        createModal(nameProductModal, imageModal2, priceRcm);
        // xử lý bên trong modal
        const amountProduct = document.querySelector(".priceAmount");
        const numberModal = document.querySelector(
            ".modal-quantity__counterNumber"
        );
        // xử lý số lượng
        const total = document.querySelector(".priceProduct");
        const totalModal = document.querySelector(".priceTotal");
        document.body.addEventListener("click", function (e) {
            if (e.target.matches(".modal-quantity__counterLeft")) {
                const text = parseInt(e.target.nextElementSibling.textContent);
                const textMinus = text - 1;
                if (text - 1 < 0) {
                    textMinus = 0;
                }
                numberModal.textContent = textMinus;
                amountProduct.textContent = textMinus;
            } else if (e.target.matches(".modal-quantity__counterRight")) {
                const text = parseInt(
                    e.target.previousElementSibling.textContent
                );
                const textPlus = text + 1;
                numberModal.textContent = textPlus;
                amountProduct.textContent = textPlus;
            }
            const amountProduct1 = parseInt(amountProduct.textContent);

            const totalText = total.textContent;
            const total1 = parseInt(totalText);
            const pay = amountProduct1 * total1;
            totalModal.textContent = pay;
        });

        // table size
        const tableSize = document.querySelector(".modal-tableSize");
        const modalInfoAll = document.querySelector(".modal-info__all");
        const iconArrowDown = document.querySelector(".fa-solid.arrowModal");
        modalInfoAll.addEventListener("click", function (e) {
            tableSize.classList.toggle("visible");
            iconArrowDown.classList.toggle("fa-arrow-up");
            iconArrowDown.classList.toggle("fa-arrow-down");
        });

        const sizeUS = document.querySelectorAll(".modal-tableSize__item");
        [...sizeUS].forEach((item) =>
            item.addEventListener("click", function (e) {
                const textSize = item.querySelector(
                    ".modal-tableSize__size.sizeUS"
                ).textContent;
                const modalInfoAll =
                    item.parentNode.parentNode.previousElementSibling;
                const All = modalInfoAll.querySelector(".modal-info__all span");
                All.textContent = textSize;
                e.target.parentNode.parentNode.classList.remove("visible");
            })
        );

        // xử lý add to cart
        const numberCart = document.querySelector(".number.number--2");
        const popup = document.querySelector(".pop-up");

        const addToCard = document.querySelector(".cart");
        addToCard.addEventListener("click", function (e) {
            popup.classList.add("visible");
            popup.classList.remove("hidden");
            // xử lý số number góc trên
            const upCard = parseInt(numberCart.textContent) + 1;
            numberCart.textContent = upCard;
            const amountItem = document.querySelector(".itemBuy__number");
            amountItem.textContent = upCard;
            // xử lý add product vào Cart(header)
            // xử lý ảnh Cart
            const getImg = document.querySelector(".modal__img");
            const getImg2 = getImg.getAttribute("src");
            // xử lý name
            const nameCart =
                document.querySelector(".modal__heading").textContent;
            // xử lý amount
            const amountCart = document.querySelector(".priceAmount");
            const amountCart2 = amountCart.textContent;

            // xử priceAddCart;
            const priceAddCart =
                document.querySelector(".priceTotal").textContent;
            const cartList = document.querySelector(".addCart__list");

            function createItemCart(image, nameCart, amountCart, priceAddCart) {
                const templateCart = `<div class="addCart__item">
            <img
                src="${image}"
                alt=""
                class="addCart__img"
            />
            <div class="addCart__info">
                <h4 class="addCart__name line-clamp">
                    ${nameCart}
                </h4>
                <div class="addCart__amount">
                    <div
                        class="addCart__amountLeft"
                    >
                        <span
                            class="addCart__Number"
                            >${amountCart}</span
                        >
                        <span class="addCart__x"
                            >x</span
                        >
                    </div>
                    <div class="addCart__amountRight">
                        <span class="moneyCart Cart-1">${priceAddCart}</span>
                        <span class="moneyCart">$</span>
                    </div>
                </div>
            </div>
        </div>`;
                cartList.insertAdjacentHTML("afterbegin", templateCart);
            }
            createItemCart(getImg2, nameCart, amountCart2, priceAddCart);

            // xử lý tổng giá tiền của các sản phẩm khi addCart
            const moneyCart = document.querySelectorAll(".moneyCart.Cart-1");
            let tong = 0;
            [...moneyCart].forEach((item) => {
                let price = parseInt(item.textContent);
                tong += price;
            });

            const subTotal = document.querySelector(".subTotal");
            subTotal.textContent = tong;
        });
    })
);
