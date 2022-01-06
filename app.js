
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "flex";
}
$('header').ripples({
    resolution: 720,
    dropRadius: 10,
    perturbance: 0.02,
});
var typed = new Typed("h1 .intro", {
    strings: ["Piyush Chittora", "A Designer", "A Web Developer"],
    typedSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed = new Typed("h2 .intro", {
    strings: ["Piyush Chittora", "A Designer", "A Web Developer"],
    typedSpeed: 100,
    backSpeed: 60,
    loop: true
});
$(document).ready(function () {
    $(".menu").click(function () {
        $(".mainhead .menucart").toggleClass("active");
    });
});

gsap.from('.welcome h1',{opacity:0,duration:1,y:-50,delay:0.5})
gsap.from('.welcome p',{opacity:0,duration:1,y:-50})
gsap.from('.descp',{opacity:0,duration:1,y:-50})
