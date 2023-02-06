const navlist = document.getElementsByTagName('ul')[0]
const hamburger = document.getElementsByClassName("hamburger")[0]

hamburger.addEventListener('click', ()=>{
    navlist.classList.toggle("show")
})