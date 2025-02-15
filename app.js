// --------------------------Dark and light mode-------------------------------//
(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

// --------------------------Text changing effect-------------------------------//
const text =document.querySelector(".fir-text");

const textLoad =()=>{
    setTimeout(()=>{
        text.textContent="Front-end developer";
    },0);
    setTimeout(()=>{
        text.textContent="React JS developer";
    },2000);
    setTimeout(()=>{
        text.textContent="JavaScript developer";
    },4000);
}
textLoad();
setInterval(textLoad, 6000)
// -----------------------------Send mail----------------------------------------//
function sendMail(){
    let parms ={
           name : document.getElementById("name").value,
           email : document.getElementById("email").value,
           subject : document.getElementById("subject").value,
           message: document.getElementById("subject").value,
    }
    emailjs.send("service_hx4rbxe","template_5xwifaa",parms).then(alert("Email sent"))
}
