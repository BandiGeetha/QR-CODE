var container=document.querySelector(".container")
var generatebtn=document.querySelector(".generate-btn");
var qrinput = document.querySelector(".qr-code");
var qrImg=document.querySelector(".qr-img");

generatebtn.onclick = function (){
    if(qrinput.value.length >0){
    container.classList.add("active");
    qrImg.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
    +qrInput.value;
    }
}
 