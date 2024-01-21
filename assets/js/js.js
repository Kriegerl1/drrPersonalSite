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