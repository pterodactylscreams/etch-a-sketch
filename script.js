const containerDiv=document.getElementById("containerDiv")

for (let i=0; i<16; i++){
    const squareDiv=document.createElement("div")
    containerDiv.appendChild(squareDiv)
    squareDiv.classList.add("squareDiv")
    // squareDiv.textContent=" h"
}

for (let i=0; i<16; i++){
    const inSquare=document.createElement("div")
    squareDiv.appendChild(inSquare)
}