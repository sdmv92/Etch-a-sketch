const container = document.querySelector("#container")
const button = document.querySelector("#button")
button.addEventListener("click", function(){
    let numberOfBoxes = prompt("Enter squared from 0-100")
    if (numberOfBoxes<=100 && numberOfBoxes >=0){
        let gridBoxes = numberOfBoxes * numberOfBoxes
    for(counter = 0 ; counter < gridBoxes; counter++){
        const box = document.createElement("div")
        box.style.width = (600/numberOfBoxes) + "px";
        box.style.height = (600/numberOfBoxes) + "px";
        container.appendChild(box)
        box.addEventListener("mouseover",() =>  box.style.background = randomColor(), {once:true})
        box.addEventListener("mouseover",() =>  box.style.opacity = Number(box.style.opacity)+0.1)
    }
    }else 
    alert("Invalid number")
})

function randomColor(){
    let x=Math.floor(Math.random()*255);
    let y=Math.floor(Math.random()*255);
    let z=Math.floor(Math.random()*255);
    let color= "rgb("+x+","+y+","+z+")";
    return color;
}
    


