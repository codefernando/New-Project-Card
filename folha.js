const title = document.querySelector('h3');
const paragrafo = document.querySelector('p');

function typeWrite(el,){
    const textarray = el.innerHTML.split("");
    el.innerHTML = "";
    textarray.forEach((letra ,i)=>{
        setTimeout(() => el.innerHTML += letra, 120 * i);
    });
}
typeWrite(title);
typeWrite(paragrafo)

///////////////////////////////////////////////////////////////////;

function load(){
    document.querySelector('body').setAttribute("class","corfundo");
}
