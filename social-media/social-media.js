const menuEl = document.querySelector(".menu");
const menuTextEl = document.querySelector(".menu p");
const socialListsEl = document.querySelector(".social-lists");
const liEls = document.querySelectorAll(".social-lists li");

menuEl.addEventListener("click", ()=>{
    socialListsEl.classList.toggle("hide");
    menuEl.classList.toggle("rotate");
});

// esto hace que cada elemento se vea en la parte superior
// una vez se haga el click

liEls.forEach(liEl =>{
    liEl.addEventListener("click", ()=>{
        menuTextEl.innerHTML = liEl.innerHTML
        socialListsEl.classList.add("hide");
        menuEl.classList.toggle("rotate");
    })
});