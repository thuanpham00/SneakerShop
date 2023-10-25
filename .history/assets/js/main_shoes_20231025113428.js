// call api
let data = [];
let currentPage = 1;
const limit = 20;
const endPointShoes = `https://github.com/thuanpham00/e-commerce/productShoes?_limit=${limit}`;
const shoesList = document.querySelector(".shoes-list");
function renderItemShoes(item) {
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
    shoesList.insertAdjacentHTML("beforeend", template);
}
// lấy dữ liệu từ json shoes và get ra giao diện
async function getProductShoes(page = 1) {
    const response = await fetch(`${endPointShoes}&_page=${currentPage}`, {
        mode 
    });
    const newData = await response.json();

    data = newData; // lưu cái data vào 1 mảng
    shoesList.innerHTML = ""; // trước khi render product thì nội dung của nó rỗng
    if (data.length > 0 && Array.isArray(data)) {
        data.forEach((item) => {
            renderItemShoes(item);
        });
    }
}
getProductShoes();

const numberPage = document.querySelectorAll(".link-number");
[...numberPage].forEach((item,index) =>
    item.addEventListener("click", async function () {
        [...numberPage].forEach((item) => item.classList.remove("active"));
        item.classList.add("active");
        const page = index + 1;
        currentPage = page
        getProductShoes(page);
    })
);
