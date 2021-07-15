function moreInf() {
    var infs = document.getElementById("infs");
    infs.classList.toggle("infs-toggle");

    var flipArrow = document.getElementById("inf-arrow");
    flipArrow.classList.toggle("inf-arrow");
}

window.onscroll = function () {
    document.getElementById("to-top").style.opacity = "1";
    document.getElementById("to-top").style.bottom = "20px";
}

window.addEventListener("scroll", () => {
    if (window.pageYOffset < 200) {
        document.getElementById("to-top").style.opacity = "0";
        document.getElementById("to-top").style.bottom = "-60px";
    } else if (window.pageYOffset == 0) {
        document.getElementById("to-top").style.opacity = "1";
        document.getElementById("to-top").style.bottom = "20px";
    }
});