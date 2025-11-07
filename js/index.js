const hamburger = document.querySelector(".hamburger")
const aside = document.querySelector('aside');
hamburger.addEventListener("click", () => {
    if(aside.classList.contains("show-aside")){
        aside.classList.remove("show-aside");
        aside.classList.add("hide-aside");
    }else{
        aside.classList.remove("hide-aside");
        aside.classList.add("show-aside");
    }
});