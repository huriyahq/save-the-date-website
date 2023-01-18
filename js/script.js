const heart = document.getElementById("heart");
const navMenu = document.getElementById("navMenu");
// const hero = document.getElementById("hero");

heart.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
    navMenu.classList.contains("show-menu") ? document.getElementById("heart").style.position = "fixed" : document.getElementById("heart").style.position = "static";

});

window.addEventListener("load", () => {
    document.getElementById("hero").style.backdropFilter = ""
});

window.onresize = function() {
    // navMenu.classList.remove("show-menu");
    if (window.outerWidth > 768) {
        navMenu.classList.remove("show-menu");
    }
}

function hideShowRequirements(val) {
    if (val == "Y") {
        document.getElementById("requirements").style.display = "block";
        document.getElementById("requirements-label").style.display = "block";

    } else {
        document.getElementById("requirements").style.display = "none";
        document.getElementById("requirements-label").style.display = "none";

    }
}