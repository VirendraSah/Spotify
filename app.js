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

let TabMenuIcon=document.querySelector(".tabMenuIcon")
let TabMenuItems=document.querySelector(".TabmenuItems")
TabMenuIcon.addEventListener("click",()=>{
    if(TabMenuIcon.innerHTML.includes('<i class="fa-solid fa-bars"></i>')){
        TabMenuIcon.innerHTML='<i class="fa-solid fa-xmark"></i>'
        TabMenuItems.style.display="block";
    }
    else{
        TabMenuIcon.innerHTML='<i class="fa-solid fa-bars"></i>'
        TabMenuItems.style.removeProperty("display")
    }
})