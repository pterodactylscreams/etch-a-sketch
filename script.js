const button = document.getElementById("gridButton")

button.addEventListener("click", function () {
    let num = Number(prompt("Enter a value (limit: 100) for square grid dimensions:"))
    while (num <= 0 || num > 101 || isNaN(num)) {
        num = Number(prompt("Enter a value (limit: 100) for square grid dimensions:"))
    }

    const containerDiv = document.getElementById("containerDiv")
    containerDiv.style.backgroundColor="#dcdbf4"
    containerDiv.innerHTML = ""

    let height = containerDiv.getBoundingClientRect().height;
    let width = containerDiv.getBoundingClientRect().width;


    for (let i = 0; i < num * num; i++) {
        const square = document.createElement("div")
        square.classList.add("square")

        square.style.width = `${width / num}px`
        square.style.height = `${height / num}px`

        containerDiv.appendChild(square)

        square.addEventListener("mouseover", function(){
            square.style.backgroundColor="#45327a1e"
        })
    }
})