const pass = document.getElementById("txtPassword");    
const icon = document.querySelector(".fa-solid");

icon.addEventListener('click', e => {
    if (pass.type == "password"){
        pass.type = "text";
        icon.classList.remove('fa-eye')
        icon.classList.add('fa-eye-slash')
    }else{
        pass.type == "text"
        pass.type = "password";
        icon.classList.remove('fa-eye-slash')
        icon.classList.add('fa-eye')
    }
});