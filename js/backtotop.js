/* Go To Top Knop */
mybutton = document.getElementById("TopBtn");

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // voor Safari
    document.documentElement.scrollTop = 0; // voor Chrome, Firefox, IE en Opera
}
