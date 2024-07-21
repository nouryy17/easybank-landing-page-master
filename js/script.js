let list =document.querySelector("nav ul")
let svg =document.querySelectorAll("nav .svg svg")
function toggleActivClass(clickEle) {
    let svgActiv=document.querySelectorAll("nav .svg svg.activ")
    svgActiv.forEach((ele) =>{
        ele.classList.remove("activ")
        list.classList.toggle("activ")
    })
    clickEle.classList.add("activ")
}