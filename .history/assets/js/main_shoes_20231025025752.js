// // call api
// let data = [];
// let page = 1;
// const limit = 20;
// const endPointShoes = `http://localhost:912/productShoes?_limit=${limit}`;
// const shoesList = document.querySelector(".shoes-list");
// function renderItemShoes(item) {
//     const template = `<div class="sneaker__item">
//     <a href="#!" class="sneaker__link"
//         ><img
//             src="${item.image}"
//             alt="Sneaker"
//             class="sneaker__pic"
//         />
//         <div class="sneaker__icon">
//             <i class="fa-regular fa-heart"></i>
//         </div>
//         <h3 class="sneaker__title line-clamp">
//             ${item.title}
//         </h3>
//         <p class="sneaker__desc">Lowest Ask</p>
//         <div class="sneaker-row">
//             <span class="sneaker__buy"
//                 >${item.price}
//             </span>
//             <div class="sneaker__usd">$</div>
//         </div>
//     </a>
// </div>`;
//     shoesList.insertAdjacentHTML("beforeend", template);
// }
// // lấy dữ liệu từ json shoes và get ra giao diện
// async function getProductShoes(page = 1) {
//     const response = await fetch(`${endPointShoes}&_page=${page}`);
//     const newData = await response.json();

//     data = newData;

//     shoesList.innerHTML = ""; // trước khi render product thì nội dung của nó rỗng
//     if (data.length > 0 && Array.isArray(data)) {
//         data.forEach((item) => {
//             renderItemShoes(item);
//         });
//     }
// }
// getProductShoes();

// const numberPage = document.querySelectorAll(".link-number");
// [...numberPage].forEach((item) =>
//     item.addEventListener("click", async function () {
//         [...numberPage].forEach((item) => item.classList.remove("active"));
//         item.classList.add("active");
//         page++;
//         getProductShoes(page);
//     })
// );
let data = [];
let currentPage = 1;
const limit = 20;
const endPointShoes = `http://localhost:912/productShoes?_limit=${limit}`;
const shoesList = document.querySelector(".shoes-list");

function renderItemShoes(item) {
    const template = `<div class="sneaker__item">
    <a href="#!" class="sneaker__link">
        <img src="${item.image}" alt="Sneaker" class="sneaker__pic" />
        <div class="sneaker__icon">
            <i class="fa-regular fa-heart"></i>
        </div>
        <h3 class="sneaker__title line-clamp">${item.title}</h3>
        <p class="sneaker__desc">Lowest Ask</p>
        <div class="sneaker-row">
            <span class="sneaker__buy">${item.price}</span>
            <div class="sneaker__usd">$</div>
        </div>
    </a>
</div>`;
    shoesList.insertAdjacentHTML("beforeend", template);
}

// Lấy dữ liệu cho trang đầu tiên
async function getFirstPage() {
    const response = await fetch(`${endPointShoes}&_page=1`);
    const newData = await response.json();
    data = newData;
    renderData(data);
}

// Hiển thị dữ liệu
function renderData(data) {
    shoesList.innerHTML = "";
    if (data.length > 0 && Array.isArray(data)) {
        data.forEach((item) => {
            renderItemShoes(item);
        });
    }
}

// Xử lý sự kiện khi click vào trang
const numberPage = document.querySelectorAll(".link-number");
[...numberPage].forEach((item, index) => {
    item.addEventListener("click", async function () {
        // Loại bỏ lớp active khỏi tất cả các trang
        [...numberPage].forEach((item) => item.classList.remove("active"));
        // Thêm lớp active vào trang hiện tại
        item.classList.add("active");
        // Lấy dữ liệu cho trang tương ứng
        const page = index + 1;
        if (page !== currentPage) {
            const response = await fetch(`${endPointShoes}&_page=${page}`);
            const newData = await response.json();
            data = newData;
            currentPage = page;
            renderData(data);
        }
    });
});

// Khởi tạo trang đầu tiên
getFirstPage();
