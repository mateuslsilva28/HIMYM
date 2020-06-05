$(document).ready(function(){
    const personagens = [
        [$("#ted"), $("#fototed"), $("#bted")],
        [$("#marshall") ,$("#fotomarshall"), $("#bmarshall")],
        [$("#lily") ,$("#fotolily"), $("#blily")],
        [$("#barney") ,$("#fotobarney"), $("#bbarney")],
        [$("#robin") ,$("#fotorobin"), $("#brobin")]
    ]
    let largura = $(document).width();

    inicia();
    alert("Clique na Foto")

    function inicia(){
        personagens[0][1].click(function(){
            modal(personagens[0], largura)
        })
        personagens[1][1].click(function(){
            modal(personagens[1], largura)
        })
        personagens[2][1].click(function(){
            modal(personagens[2], largura)
        })
        personagens[3][1].click(function(){
            modal(personagens[3], largura)
        })
        personagens[4][1].click(function(){
            modal(personagens[4], largura)
        })
    }
    function modal(personagem, largura){
        if(largura > 721){
            personagem[2].fadeToggle('slow');
        }else {

                personagem[1].hide()
                personagem[0].css("justify-content", "center");
                personagem[2].css({"width":"80%", "border":"1px solid #000", "font-size":"13px"}).fadeIn('slow')
                personagem[2].click(function(){
                    personagem[2].hide()
                    personagem[0].css("justify-content", "flex-start")
                    personagem[1].fadeIn('slow')
                })
            
        }
    }
})
