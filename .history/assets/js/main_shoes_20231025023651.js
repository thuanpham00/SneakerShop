// call api
let data = [];
let page = 1;
const limit = 10;
const endPointShoes = `http://localhost:912/productShoes?limit=${limit}`;
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
async function getProductShoes(link = endPointShoes, page = 1) {
    const response = await fetch(link);
    const data = await response.json();
    shoesList.innerHTML = ""; // trước khi render product thì nội dung của nó rỗng
    if (data.length > 0 && Array.isArray(data)) {
        data.forEach((item) => {
            renderItemShoes(item);
        });
    }
}
getProductShoes();