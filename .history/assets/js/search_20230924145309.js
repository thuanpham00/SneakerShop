// xử lý input text _ local storage
window.addEventListener("load", function () {
    const inputSearch = document.querySelector(".header-search__input");
    inputSearch.addEventListener("click", function (e) {
        todoList.classList.toggle("visible");
    });

    const todoForm = document.querySelector(".header-search__form");
    const todoList = document.querySelector(".todo-list");
    // nếu có localStorage thì chuyển từ chuỗi sang mảng || nếu ko có thì mảng rỗng
    let todos = JSON.parse(localStorage.getItem("todoList")) || [];
    if (Array.isArray(todos) && todos.length > 0) {
        // check nó là mảng và có length > 0
        [...todos].forEach((item) => createItem(item)); // tạo lại item lấy từ localStorage
    }

    function createItem(item) {
        const templateItem = `<div class="todo-list__item">
    <div class="todo-list__info">
        <i class="fa-solid fa-magnifying-glass"></i>
        <span class="todo-list__title line-clamp">${item}</span>
    </div>
    <div class="todo-list__remove">
        <i class="fa-solid fa-x"></i>
    </div>
</div>`;

        todoList.insertAdjacentHTML("beforeend", templateItem);
    }

    todoForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const todoInput = this.elements["todo"].value; 
        // "todo" là name
        console.log(todoInput);
        createItem(todoInput);
        todos.push(todoInput);
        // thêm nó vào todos
        // lưu dữ liệu vào localStorage
        // chuyển dữ liệu thành chuỗi để bỏ vào
        localStorage && localStorage.setItem("todoList", JSON.stringify(todos));
        this.elements["todo"].value = "";
    });

    // remove localStorage
    todoList.addEventListener("click", function (e) {
        if (e.target.matches(".todo-list__remove")) {
            const item = e.target.parentNode;
            item.parentNode.removeChild(item);
            const itemText = e.target.previousElementSibling;
            const text =
                itemText.querySelector(".todo-list__title").textContent;
            const find = todos.findIndex((item) => item === text);
            // dò tìm trong localStorage có cái nào giống text thì remove đi
            // tìm được vị trí của text thì cắt đi (splice)
            todos.splice(find, 1);
            // cập nhật lại localStorage
            localStorage && localStorage.setItem("todoList", JSON.stringify(todos))
        }
    });
});
