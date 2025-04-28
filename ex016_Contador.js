function calcular() {
    let inicio = document.getElementById('inicio') // let e var são iguais por enquanto
    let fim = document.getElementById ('fim')
    let passos = document.getElementById ('passos')
    let res = document.getElementById ('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
        res.innerHTML = 'Impossível contar'
        alert('[ERRO] preencha todos os campos')
    } else {
        res.innerHTML ='Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passos.value)
        if (p <= 0) {
            alert('Passo inválido! considerando passo 1')
            p = 1
        }
        if (i < f){
            //contagem crescente
            for(let c=i; c <= f; c += p){
                res.innerHTML += ` \u{1F449} ${c}` 
            }
        } else {
            //contagem regressiva
        for (let c = i; c >= f; c -= p){
            res.innerHTML += ` \u{1F449} ${c}`
            }
        }
         res.innerHTML += `\u{1FAE1}`
    }
}
