
const btn =document.getElementById ("click")
btn.addEventListener("click",function ()
{
    let tipo = "0123456789ABCDEF";
    let color = "#"; 
    for (var i = 0 ; i< 6; i++){
        color = color + tipo[Math.floor(Math.random()*16)];
    }
    document.body.style.backgroundColor = color;
    document.getElementById("portapapeles").innerHTML = color;
    
})