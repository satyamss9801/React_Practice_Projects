let h1 = document.querySelector("h1");
function changecol(color, delay, nextcol) {

    setTimeout(() => {
        h1.style.color = color;
        if (nextcol) {
            nextcol();
        }
    }, delay);
}

changecol("red",1000,()=>{
    changecol("blue",1000,()=>{
        changecol("yellow",1000);
    })
})