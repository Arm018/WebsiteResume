const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".modal-button");
const closeButton = document.querySelector(".close-button");
const scrollDown = document.querySelector(".scroll-down");
let isOpened = false;

const openModal = () => {
    modal.classList.add("is-open");
    body.style.overflow = "hidden";
};

const closeModal = () => {
    modal.classList.remove("is-open");
    body.style.overflow = "initial";
};

window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight / 3 && !isOpened) {
        isOpened = true;
        scrollDown.style.display = "none";
        openModal();
    }
});

modalButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

document.onkeydown = evt => {
    evt = evt || window.event;
    evt.keyCode === 27 ? closeModal() : false;
};

const loginButton = document.getElementById("login-form-submit");
const login = document.getElementById('login');
const password = document.getElementById('password');
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const user = login.value;
    const pass = password.value;

    if (user === "1111" && pass === "0000") {
        function f(){
            location.href = '../index.html';
        }
        f();

    } else {
        alert('Invalid login or password!');
    }
})