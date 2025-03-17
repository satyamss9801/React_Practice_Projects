let s1 = document.querySelector(".inn.one");
let s2 = document.querySelector(".inn.two");
let btn = document.querySelector(".Toggle");

btn.onclick = function () {
    s1.classList.toggle("red");
    s2.classList.toggle("red"); // Adds the "red" class to the s1 element
};
