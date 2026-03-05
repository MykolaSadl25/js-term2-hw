const imageObserver = new IntersectionObserver((elem,observer)=>{
    elem.forEach((img)=>{
        if (img.isIntersecting) {
            const paths = img.target.dataset.src;
            img.target.src = paths;
            img.target.style.transform = "scale(1)"
            observer.unobserve(img.target)
        }
    })
},{
    rootMargin:"70px"
});
const allImagesArrayRef = document.querySelectorAll("img");
allImagesArrayRef.forEach((item)=>imageObserver.observe(item))