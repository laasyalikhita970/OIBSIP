// Smooth button click effect

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function(e){

        if(this.getAttribute("href") === "#"){
            e.preventDefault();
            alert("Thank you for visiting AI Learn Hub!");
        }

    });

});

// Navbar shadow on scroll

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
    }
    else{
        header.style.boxShadow = "0 3px 10px rgba(0,0,0,0.08)";
    }

});