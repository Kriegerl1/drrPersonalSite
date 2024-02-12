function blurDev(){
    let hideClose = document.querySelector('.products-section');
    let hide = document.querySelector('.dev-section');
    if(hide.classList.contains('hidden')) {
        hide.classList.remove('hidden');
        hideClose.classList.add('hidden');
    }else{
        hide.classList.add('hidden');
    }
}
function blurProduct(){
    let hide = document.querySelector('.products-section');
    if(hide.classList.contains('hidden')) {
        hide.classList.remove('hidden');
    }else{
        hide.classList.add('hidden');
    }
}

// contador de acessos teste

function setCookie(nome, valor, dias){ 
    diasms = (new Date()) .getTime() + 1000 * 3600 * 24 * dias; 
    dias = new Date(diasms); 
    expires = dias.toGMTString(); 
    document.cookie = escape(nome) + "=" + escape(valor) + "; expires=" + expires; 
    } 

if (!document.cookie){
    setCookie("cookie", "1", 365);
    document.write("Access Counter : 1");
    } else {
    var cont = document.cookie;
    var dividindo = cont.split("=");
    var numero = parseInt(dividindo[1]);
    var soma = numero + 1;
    document.write("Access Counter : " + soma);
    setCookie("cookie", soma, 365);
    }


// contador de acessos teste