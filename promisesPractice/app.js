let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            h1.style.color = color;
            resolve("color Changed");
        }, delay);

    });
}

changeColor("red",1000)
.then(()=>{
    console.log("Success:Color changed to red");
    return changeColor("purple",1000);
})
.then(()=>{
    console.log("Success:Color changed to purple");
    return changeColor("green",1000);
})
.then(()=>{
    console.log("Success:Color changed to green");
    return changeColor("yellow",1000);
})
.catch(()=>{
    console.log("Failure:Sorry for inconvience");
})