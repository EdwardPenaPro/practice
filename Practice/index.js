let div1= document.getElementById("id");

div1.innerHTML +="<span> Carlos</span>"
let span=document.querySelector("span")
// span.style.color="red"
// span.style.fontSize="24px"
// span.style.backgroundColor="Cyan"
// span.style.border="1px solid white"
// span.style.outline="1px dashed yellow"
// span.style.margin="5px"

//  span.classList.add("class1")
// div1.classList.remove("class1")
// div1.classList.toggle("class1")
// span.classList.toggle("class1")

span.addEventListener("click",()=>{
    span.classList.add("class1")
})
