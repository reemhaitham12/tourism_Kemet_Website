// login

const loginIcon = document.getElementById("loginIcon");
const loginModal = document.getElementById("loginModal");
const openLoginBox = document.getElementById("openLoginBox");
const loginBox = document.getElementById("loginBox");
const mainBox = document.getElementById("mainBox");

/* فتح المودال */
loginIcon.onclick = function () {
  loginModal.classList.add("active");
};

/* فتح بوكس تسجيل الدخول */
openLoginBox.onclick = function (e) {
  e.stopPropagation();
  loginBox.classList.add("active");
  mainBox.style.display = "none";
};

/* غلق المودال عند الضغط خارج البوكس */
loginModal.onclick = function (e) {
  if (e.target === loginModal) {
    loginModal.classList.remove("active");
    loginBox.classList.remove("active");
    mainBox.style.display = "block";
  }
};