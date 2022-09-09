// let colors = ["green", "red", "rgba(33,122,200,.3)", "#f15025"]
// let btn = document.getElementById("btn");
// let color = document.querySelector(".color");

// btn.addEventListener("click", ()=>{
//     let randomNumber = getRandomNumber()
//     console.log(randomNumber)
//     document.body.style.backgroundColor = colors[randomNumber]
//     color.innerHTML    = colors[randomNumber]
// })

//  let getRandomNumber= ()=>{
//     return Math.floor(Math.random() * colors.length);  
// }

let hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
let btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener("click", ()=>{
    let getRandomColor = "#";
    for (let index = 0; index < 6; index++) {
        getRandomColor += hex[seeThroughThis()];
    document.body.style.backgroundColor = getRandomColor + hex[seeThroughThis()]
    color.textContent =  getRandomColor + hex[seeThroughThis()] 
    }
})

function seeThroughThis(){
    return Math.floor(Math.random() * hex.length)
}
console.log(seeThroughThis())
