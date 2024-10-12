let num=10
const containerDiv=document.getElementById("containerDiv")
containerDiv.innerHTML=""

let height = containerDiv.getBoundingClientRect().height;
let width = containerDiv.getBoundingClientRect().width;


for (let i=0; i<num*num; i++){
    const square=document.createElement("div")
    square.classList.add("square")

    square.style.width=`${width/num}px`
    square.style.height=`${height/num}px`

    containerDiv.appendChild(square)
}