let togglebutton = document.getElementById('toggle-bar');
let navbar = document.getElementById('navbar')
let check = true;
togglebutton.addEventListener('click',function(){
    if(check)
    {
        let img = document.getElementById('toggle');
        img.src = "./images/icon-close.svg"
        navbar.className = "active"
        check = false
    }
    else{
        let img = document.getElementById('toggle');
        img.src = "./images/icon-hamburger.svg";
        navbar.className = ""
        check =true;
    }
})