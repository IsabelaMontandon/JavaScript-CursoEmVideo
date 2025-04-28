function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22
    msg.innerText = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //bom dia!
        img.src = 'manha.png'
        document.body.style.background = "#edb07a"
    } else if (hora >= 12 && hora < 18){
        // boa tarde!
        img.src = 'tarde.png'
        document.body.style.background = "#85aff4"
    } else {
        // boa noite!
        img.src = 'noite.png'
        document.body.style.background = "#695e9a"
    }
}
