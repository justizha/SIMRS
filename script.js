    const mobileMenuBtn = document.getElementById("MobileMenuBtn");
    const mobile = document.getElementById("mobile-menu");

    mobileMenuBtn.addEventListener("click", () => {
        mobile.classList.toggle("translate-x-0");
    });
