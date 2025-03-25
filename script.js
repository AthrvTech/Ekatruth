document.addEventListener("DOMContentLoaded", function() {
    // Contact Form Validation
    document.querySelector("form").addEventListener("submit", function(event) {
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields before submitting!");
            event.preventDefault(); // Form ko submit hone se roke
        }
    });

    // Responsive Navbar Toggle
    let menuBtn = document.createElement("button");
    menuBtn.textContent = "☰ Menu";
    menuBtn.style.display = "none";
    menuBtn.style.background = "#222";
    menuBtn.style.color = "white";
    menuBtn.style.padding = "10px";
    menuBtn.style.border = "none";
    menuBtn.style.cursor = "pointer";
    
    let nav = document.querySelector("nav");
    nav.parentElement.insertBefore(menuBtn, nav);

    menuBtn.addEventListener("click", function() {
        nav.classList.toggle("show");
    });

    function checkScreenSize() {
        if (window.innerWidth < 600) {
            nav.style.display = "none";
            menuBtn.style.display = "block";
        } else {
            nav.style.display = "block";
            menuBtn.style.display = "none";
        }
    }

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize(); // Call on load
});
