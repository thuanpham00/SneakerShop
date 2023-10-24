// call api
const limit = 10;
const endPointSneaker = `http://localhost:912/productSneaker?_limit=${limit}`;
const sneakerList = document.querySelector(".sneaker-list");
let page = 1;
let data = []
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
    data = await response.json();
    sneakerList.innerHTML = ""; // trước khi render product thì nội dung của nó rỗng
    if (data.length > 0 && Array.isArray(data)) {
        data.forEach((item) => {
            renderItemSneaker(item);
        });
    }
}
getProductSneaker();

const numberPage = document.querySelectorAll(".link-number");
[...numberPage].forEach(item => item.addEventListener("click", async function() {
    [...numberPage].forEach(item => item.classList.remove("active"))
    item.classList.add("active");
    page++;
    await getProductSneaker(page)
}))
// async function handleClickNumber(item) {
//     item.classList.add("active")
// }
