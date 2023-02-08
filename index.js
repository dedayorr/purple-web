const navlist = document.getElementsByClassName('ul-list')[0]
const hamburger = document.getElementsByClassName("hamburger")[0]

hamburger.addEventListener('click', ()=>{
    navlist.classList.toggle("show")
})