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





