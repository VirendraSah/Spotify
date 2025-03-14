let MenuBarIcon=document.querySelector(".menubars")
let menuBlackbg=document.querySelector(".menuBlackBg")
console.log(menuBlackbg)
let icon=MenuBarIcon.lastElementChild
icon.addEventListener("click",()=>{
    menuBlackbg.classList.add("ShowmenuBlackBg")
})

xicon=menuBlackbg.firstElementChild
console.log(xicon)
xicon.addEventListener("click",()=>{
    menuBlackbg.classList.remove("ShowmenuBlackBg")
})