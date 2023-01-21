//Animação de texto na aba Home

const text = "FRONT-END DEVELOPER"
let i = 0;

function Typing(){
    if(i<text.length){
        document.getElementById("frontend-title").innerHTML += text.charAt(i);
        i++;
        setTimeout(Typing, 180);
    }
}

Typing();

//Animar barra do menu

$(document).ready(function(){
    $('li').on('click', function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })
})