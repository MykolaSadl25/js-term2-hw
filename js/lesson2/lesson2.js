// 1
const sliderRef = document.querySelector(".slider");
const imageRef = document.querySelector(".slider__image")
sliderRef.addEventListener("input",_.debounce((event)=>{
    imageRef.style.width = event.target.value + "px"
    imageRef.style.height = event.target.value + "px"
},500));

// 2

const boxRef = document.getElementById("box")

window.addEventListener("mousemove",_.debounce((event)=>{
    boxRef.style.position = "absolute";
    boxRef.style.top = event.clientY + "px";
    boxRef.style.left = event.clientX + "px";
},50));