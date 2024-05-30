const styleSwitcher = document.querySelector(".style-switcher-toggler");
styleSwitcher.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open")
})

window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open")
    }
})

const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color){
    alternateStyles.forEach(styles => {
        if(color === styles.getAttribute("title")){
            styles.removeAttribute("disabled")
        }else{
            styles.setAttribute("disabled", "true")
        }
    })
}


const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () =>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark")
})
window.addEventListener("load", () =>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun")
    }else{
        dayNight.querySelector("i").classList.add("fa-moon")

    }
})

const typed = new Typed(".typing",{
    strings:["Front End Developer", "Angular Developer", "Web Developer"],
    typeSpeed:100,
    bakSpeed:80,
    loop: true
})


const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
    for(let i= 0; i<totalNavList; i++){
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function(){
            for(let j = 0; j<totalNavList; j++){
                navList[j].querySelector("a").classList.remove("active")
            }
            this.classList.add("active")
        })
    }

    const navToggler = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navToggler.addEventListener("click", () => {
        asideSectionBtn();
    })
    function asideSectionBtn(){
        aside.classList.toggle("open");
        navToggler.classList.toggle("open")
    }