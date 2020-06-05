const fotosGaleria = $(".fotoGaleria")
let atual = 0
$(window).keydown(move)
$(".fechar").click(function(){fechar()})

function pegarNumero(n){
    $(".moldura").fadeIn("slow");
    $(".moldura").css({"display":"flex", "justify-content":"center", "align-items":"center"})
    $(".fotoSlide").css({"display":"flex", "justify-content":"center", "align-items":"center"})
    atual = 0
    mostrar(n)
}

const fechar = function(){
    $(".moldura").fadeOut('slow')
    atual = 0
}

function move(){
    let tecla = event.keyCode
    if (tecla == 27){
        fechar();
    }
    else if(tecla == 37){
        mostrar(-1)
    }else if(tecla == 39){
        mostrar(1)
    }
}

function mostrar(n){
    atual += n
    if(atual >27){
        atual = 0
    }
    if(atual < 0 ){
        atual = 27
    }
    $(".fotoSlide").html(fotosGaleria[atual].outerHTML)
    $(".fotoGaleria").fadeIn(500)
}

function botao(n){
    mostrar (n)
}