const styleSwitcher = document.querySelector(".style-switcher-toggler");
const styleSwtch = document.querySelector(".style-switcher");
const alternateStyles = document.querySelectorAll(".alternate-style");
const dayNight = document.querySelector(".day-night");
const icon = dayNight.querySelector("i");
const nav = document.querySelector(".nav"), navList = nav.querySelectorAll("li"), totalNavList = navList.length;
const navToggler = document.querySelector(".nav-toggler"), aside = document.querySelector(".aside");
const anchor1 = document.getElementById("anchor1");
const anchor2 = document.getElementById("anchor2");
const anchor3 = document.getElementById("anchor3");
const anchor5 = document.getElementById("anchor5");
const backdrop = document.getElementById("backdrop");
const name1 = document.getElementById("name").value;
const email = document.getElementById("email").value;
const subject = document.getElementById("subject").value;
const massage = document.getElementById("massage").value;
const contactForm = document.getElementById("contactForm");



styleSwitcher.addEventListener("click", () => {
    styleSwtch.classList.toggle("open")
})

window.addEventListener("scroll", () => {
    if(styleSwtch.classList.contains("open")){
        styleSwtch.classList.remove("open")
    }
})

function setActiveStyle(color){
    alternateStyles.forEach(styles => {
        if(color === styles.getAttribute("title")){
            styles.removeAttribute("disabled")
        }else{
            styles.setAttribute("disabled", "true")
        }
    })
}

dayNight.addEventListener("click", () =>{
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
    document.body.classList.toggle("dark")
})


window.addEventListener("load", () =>{
    if(document.body.classList.contains("dark")){
        icon.classList.add("fa-sun")
    }else{
        icon.classList.add("fa-moon")

    }
})

const typed = new Typed(".typing",{
    strings:["Front End Developer", "Angular Developer", "Web Developer"],
    typeSpeed:100,
    bakSpeed:80,
    loop: true
})

for(let i= 0; i<totalNavList; i++){
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(){
        for(let j = 0; j<totalNavList; j++){
            navList[j].querySelector("a").classList.remove("active")
        }
        this.classList.add("active")
    })
}

navToggler.addEventListener("click", () => {
    asideSectionBtn();
})
function asideSectionBtn(){
    aside.classList.toggle("open");
    navToggler.classList.toggle("open")
    backdrop.classList.toggle("d-none")
}

backdrop.addEventListener("click", asideSectionBtn)

let onScroll = (ele) => {
    let scrollValue = window.scrollY;
    if(scrollValue < 544){
        anchor1.classList.add("active");
        anchor2.classList.remove("active");
        anchor3.classList.remove("active");
        anchor5.classList.remove("active");
    }
    else if(scrollValue >= 544 && scrollValue < 1500 ){
        anchor2.classList.add("active");
        anchor1.classList.remove("active");
        anchor3.classList.remove("active");
        anchor5.classList.remove("active");

    }else if(scrollValue >= 1500 && scrollValue < 3519){
        anchor3.classList.add("active");
        anchor1.classList.remove("active");
        anchor2.classList.remove("active");
        anchor5.classList.remove("active");

    }else if(scrollValue >= 3519){
        anchor5.classList.add("active");
        anchor3.classList.remove("active");
        anchor1.classList.remove("active");
        anchor2.classList.remove("active");

    }
}

var body = "Name:" + name1 + "<br/> Email:" + email + "<br/> Subject:" + subject +"<br/> Message:" + massage;


const onSubmitBtn = (eve) => {
    eve.preventDefault()
    console.log("event binded");
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "tanvi6829@gmail.com",
        Password : "04D98AF6D6E942A87E7A9B482B690719F3F9",
        To : 'tanvi6829@gmail.com',
        From : 'tanvi6829@gmail.com',
        Subject : "For enquiry",
        Body : body
    }).then(
      message => alert(message)
    );
    contactForm.reset();
}




contactForm.addEventListener("submit", onSubmitBtn)
window.addEventListener("scroll", onScroll);

