//for toggle menubar
const menu = document.querySelector(".toggle__menu");
const openBtn = document.querySelector("#open__btn");
const closeBtn = document.querySelector("#close__btn")

openBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    openBtn.style.display = "none";

})
//close nav menu
const closeNav = () =>{
    menu.style.display = "none";
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', closeNav)