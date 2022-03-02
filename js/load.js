//desabilita o botão no início
document.getElementById("load").setAttribute('style','display:none')

//cria um event listener que escuta mudanças no input
document.getElementById("ceps").addEventListener("click", function (event) {
    document.getElementById("load").setAttribute('style','display:block')
    setTimeout(()=>{
    //habilita o botão
    document.getElementById("load").setAttribute('style','display:none')
    },20000)
    
});

document.getElementById("loadTel").setAttribute('style','display:none')

//cria um event listener que escuta mudanças no input
document.getElementById("cepss").addEventListener("click", function (event) {
    document.getElementById("loadTel").setAttribute('style','display:block')
    setTimeout(()=>{
    //habilita o botão
    document.getElementById("loadTel").setAttribute('style','display:none')
    },20000)
    
});

document.getElementById("loadEmail").setAttribute('style','display:none')

//cria um event listener que escuta mudanças no input
document.getElementById("cepsEmail").addEventListener("click", function (event) {
    document.getElementById("loadEmail").setAttribute('style','display:block')
    setTimeout(()=>{
    //habilita o botão
    document.getElementById("loadEmail").setAttribute('style','display:none')
    },20000)
    
});

document.getElementById("loadingParente").setAttribute('style','display:none')

//cria um event listener que escuta mudanças no input
document.getElementById("cepsParents").addEventListener("click", function (event) {
    document.getElementById("loadingParente").setAttribute('style','display:block')
    setTimeout(()=>{
    //habilita o botão
    document.getElementById("loadingParente").setAttribute('style','display:none')
    },20000)
    
});