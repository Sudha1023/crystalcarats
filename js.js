const hamMenu = document.querySelector(".ham");
const firstNav = document.querySelector(".first_nav");
if (hamMenu) {
  hamMenu.addEventListener("click", () => {
    firstNav.classList.toggle("open");
  });
}

// home carousel
const slide = document.querySelectorAll(".slide");
console.log(slide)
slide.forEach((items,index)=>items.style.left= `${index * 100}%`)
let count = 0
function slides(){
    slide.forEach((items)=>items.style.transform= `translateX(-${count * 100}%)`)
}
const left = document.querySelector(".left") 
const right = document.querySelector(".right")
if(left){

left.addEventListener("click",()=>{
    console.log("hi")
    count--;
    if(count<0)
    {
        count=slide.length-1
    }
    slides()
})
right.addEventListener("click",()=>{
    count++;
    if(count>slide.length-1){
        count=0
    }
    console.log(count)

    slides()
})

}
// code for sidebar

const menuIcon = document.querySelector(".menu_sidebar");
const sidebar = document.querySelector(".sidebar");

if (menuIcon) {
    menuIcon.addEventListener("click", () => {
      sidebar.classList.toggle("sidebaropen");
    });
  }

const scrollTop = document.querySelector(".scroll_to_top");

if (scrollTop) {
    scrollTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  }
  