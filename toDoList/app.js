btn = document.querySelector("button");
ul = document.querySelector("ul");
inp = document.querySelector("input");

btn.addEventListener("click", function addtolist() {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
        let par = event.target.parentElement;
        par.remove();
    }
});
