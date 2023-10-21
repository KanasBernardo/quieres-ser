import '../css/main.css';

const BotonNo = document.querySelector(".boton-no");
const BotonSi = document.querySelector(".boton-si");

BotonNo.addEventListener("mousemove", () =>{
    const randNum1 = Math.round(Math.random()*180);
    BotonNo.style.marginTop = randNum1 +"px";
    const randNum2 = Math.round(Math.random()*180);
    if(randNum2>80){
        BotonNo.style.marginLeft = randNum2 +"px"
    }else{
        BotonNo.style.marginLeft = -randNum2 +"px"
    }
})
BotonSi.addEventListener("click", () =>{
    Swal.fire({title: '<span class="title">❤️</span>',
               text: '¡Sabia que dirias que si! Te quiero mucho Preciosa',
               confirmButtonColor: 'red',})
})