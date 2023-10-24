// lấy dữ liệu từ json shoes và get ra giao diện
async function getProductShoes(link = endPointShoes) {
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