


// ------------------
// دالة لتشغيل كود المودال بعد تحميل sign.html
function initSignModal() {
  const loginIcon = document.getElementById("loginIcon");
  const loginModal = document.getElementById("loginModal");

  if (!loginIcon || !loginModal) return;

  gsap.from(".login-icon", { x: -100, opacity: 0, duration: 1, ease: "power2.out" });

  loginIcon.addEventListener("click", () => {
    loginModal.classList.add("active");
    gsap.fromTo(".modal-content", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" });
  });

  loginModal.addEventListener("click", (e) => {
    if (e.target === loginModal) loginModal.classList.remove("active");
  });
}
document.addEventListener("DOMContentLoaded", () => {
  initSignModal();
});


// ------------------
// ✅ دالة لتفعيل الـ active في الهيدر بعد تحميله
function initNavbarActive() {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  if (!navLinks.length) return;

  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href.includes(currentPage)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

const btn = document.querySelector(".toggle-btn");
const text = document.querySelector(".text");

btn.addEventListener("click", () => {
  text.classList.toggle("expanded");

  if (text.classList.contains("expanded")) {
    btn.textContent = "عرض أقل";
  } else {
    btn.textContent = "عرض المزيد";
  }
});

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


// signup
const signupBtn = document.querySelector(".btn-signup");
const signupBox = document.getElementById("signupBox");

/* فتح بوكس إنشاء الحساب */
signupBtn.onclick = function(e) {
  e.stopPropagation();
  signupBox.classList.add("active");
  mainBox.style.display = "none";
  loginBox.classList.remove("active"); // لو فتح اللوجين قبل كده يقفل
};

/* غلق المودال عند الضغط خارج البوكس */
loginModal.onclick = function (e) {
  if (e.target === loginModal) {
    loginModal.classList.remove("active");
    loginBox.classList.remove("active");
    signupBox.classList.remove("active");
    mainBox.style.display = "block";
  }
};

// اختيار العناصر
const btnEdit = document.querySelector('.btn-edit');
const editModal = document.getElementById('editModal');

// فتح المودال عند الضغط على زر تعديل الملف الشخصي
btnEdit.addEventListener('click', () => {
  editModal.style.display = 'flex';
});

// غلق المودال عند الضغط خارج البوكس
editModal.addEventListener('click', (e) => {
  if (e.target === editModal) {
    editModal.style.display = 'none';
  }
});




