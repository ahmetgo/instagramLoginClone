const photoSlider = document.getElementById('photoSlider');
const photo = document.getElementsByClassName("photo");

var index = 0;
showSlide();


//fotoğraf değiştirme
function showSlide(){
    for (var i = 0; i < photo.length; i++) {
        photo[i].style.display = "none";
    }
    index++;
    if (index > photo.length) {
        index = 1;
    }
    
    photo[index-1].style.display = "block";
    setTimeout(showSlide,2000);
}



//form işlemleri

const inputPassword = document.getElementById('password');
const inputMail = document.getElementById('mail');
const showPassButton = document.querySelector('.show-password');
const button = document.querySelector('.button');


inputMail.oninput=function (){
    inputMail.setAttribute("value",inputMail.value);
}

inputPassword.oninput=function (){
    inputPassword.setAttribute("value",inputPassword.value);
    
    if(inputPassword.value.length > 0){
        showPassButton.style.display = "block";
    }else{
        showPassButton.style.display = "none";
    }
}


const showPassword = () =>{
    inputPassword.type = (inputPassword.type == 'password' ? 'text':'password');
    showPassButton.innerHTML = (showPassButton.innerHTML == "Göster" ? "Gizle":"Göster");
}




