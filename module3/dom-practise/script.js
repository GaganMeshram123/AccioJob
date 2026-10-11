let newbuttom = document.createElement("button");
newbuttom.innerText ="click";
console.log(newbuttom);

let btn1 = documnet.querySelector("#abjhb");
btn1.addEventListner("click",(evt) => {
    console.log("button was clicked");
})

btn1.addEventListner("click", () => {
    console.log("button was clicked -handled");
})