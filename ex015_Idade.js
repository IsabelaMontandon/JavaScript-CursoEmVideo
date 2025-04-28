function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] ano inválido')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade < 13){
                //crianca
                img.setAttribute('src', 'criancamenino.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade < 60){
                // adulto
                img.setAttribute('src', 'adultohomem.png')
            } else {
                // idoso
                img.setAttribute('src', 'idosohomem.png')
            }
        } else if (fsex[1].checked){
            genero = 'mulher'
            if(idade >= 0 && idade < 13){
                //crianca
                img.setAttribute('src', 'criancamenina.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovemmulher.png')
            } else if (idade < 60){
                // adulto
                img.setAttribute('src', 'adultamulher.png')
            } else {
                // idoso
                img.setAttribute('src', 'idosamulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade}</br>`
        img.style.marginTop = '20px';
        res.appendChild(img)
    }
}
