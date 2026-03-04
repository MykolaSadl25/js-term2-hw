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

//  <!-- 1 -->

//     <div class="slider">
//       <input type="range" min="1" max="100" value="50" class="slider__input" />
//       <img
//         src="https://tse4.mm.bing.net/th/id/OIP.6vcGLGrmyfyqGRO77duxLwHaLa?rs=1&pid=ImgDetMain&o=7&rm=3"
//         class="slider__image"
//         alt="image"
//       />
//     </div>

//     <!-- 2 -->

//     <div id="box"></div>
    
//     <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.23/lodash.min.js"></script>
//     <script type="module" src="./js/lesson2/lesson2.js"></script>