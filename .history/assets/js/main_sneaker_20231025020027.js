// call api
const endPointSneaker = "http://localhost:912/productSneaker?limit=${limit}`;
const sneakerList = document.querySelector(".sneaker-list");
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
async function getProductSneaker(link1 = endPointSneaker) {
    const response = await fetch(link1);
    const data = await response.json();
    // sneakerList.innerHTML = ""; // trước khi render product thì nội dung của nó rỗng
    if (data.length > 0 && Array.isArray(data)) {
        data.forEach((item) => {
            renderItemSneaker(item);
        });
    }
}
getProductSneaker();