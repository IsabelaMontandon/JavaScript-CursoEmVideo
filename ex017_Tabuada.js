function tabuada(){
    var num = Number(document.getElementById('num').value)
    var tab = document.getElementById('seltab')
    var c = 0
    tab.innerHTML = ''
    while(c <= 10){
        var item = document.createElement('option')
        item.text = `${num} x ${c} = ${num*c}`
        item.value = `tab${c}`//para JS não faz muito sentido, porém para outras linguagens faz
        tab.appendChild(item)
        c++
    }
}
