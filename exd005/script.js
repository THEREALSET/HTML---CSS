function contar() {
    var cm = document.getElementById('inicio1')
    var f = document.getElementById('inicio2')
    var cd = document.getElementById('inicio3')
    var res = document.getElementById('res')
    if (cm.value.lenght == 0 || f.value.lenght == 0 || cd.value.lenght == 0 ) {
        res.innerHTML = 'Impossível contar!'
        alert('Faltam dados!')
    } else {
        res.innerHTML = `Contando: <br>`
        var c1 = Number(cm.value)
        var f1 = Number(f.value)
        var cd1 = Number(cd.value)
        var c = c1
        if (cd1 <= 0) {
            alert('Passo invalido!')
        }
        if (c1 < f1) {
            while (c <= f1) {
            c += cd1
            res.innerHTML += `${c} `
            } //tenta entender esse código mt zika mané
        } else {
            while (c >= f) {
                res.innerHTML += `${c} `
                c -= cd1
            } //faz a mesma coisa que o código anterior porém de traz para frente
        }
        
    }
}