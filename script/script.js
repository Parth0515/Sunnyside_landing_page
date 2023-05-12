const contactBtn = document.querySelectorAll("button.ct-btn");
const footer = document.querySelector("#footer");
for( let i = 0; i < contactBtn.length; i++){
    contactBtn[i].addEventListener('click', function() {
        footer.scrollIntoView({behavior: "smooth"});
    })
}

const ham_btn = document.querySelector("input#check");
ham_btn.addEventListener('click', function() {
    const mob_menu = document.querySelector(".mobile-nav");
    if (mob_menu.style.display == "inline-block"){
        mob_menu.style.display = "none";
        console.log("if working");
    } else {
        mob_menu.style.display = "inline-block";
        console.log("else working");
    }
});